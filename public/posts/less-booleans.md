# Less Booleans

Booleans are a natural fit for binary states. However, a state that appears binary today may not be tomorrow. When a third option becomes necessary, an initial `bool` in a public API creates a difficult choice:

1.  **A Breaking Change:** Replace the `bool` with a more flexible type, forcing all consumers to update their code.
2.  **Boolean Creep:** Add a second `bool`, leading to a combinatorial explosion of states, some of which may be invalid.

Using more descriptive types from the start can create APIs that are more robust, self-documenting, and easier to evolve.

## The Problem: An Evolving User Status

Consider a function that needs a user's status. Initially, a user can only be `active` or `inactive`. A boolean seems sufficient.

```python
def something_user_status(user_id: int, is_active: bool) -> None:
    # ... implementation ...
```

Later, a new "In Meeting" status is required. Now we are at a crossroad, breaking change or another boolean? let's have a look at another boolean :

```python
def something_user_status(user_id: int, is_active: bool, is_in_meeting: bool) -> None:
    # ... implementation ...
```

This design is flawed. It uses two variables to represent a single concept, and it allows for invalid state combinations, such as a user being both inactive and in a meeting (`is_active=false`, `is_in_meeting=True`). This moves error handling from the type system into runtime logic. As we add more states, the number of combinations increases exponentially.

## Alternatives to Boolean Flags

More expressive types can make invalid states unrepresentable. They are also more self-documenting than positional booleans. The intent of `something_user_status(123, True, False)` is unclear without inspecting the function's definition.

### 1. `enum.Enum`

For a fixed, mutually exclusive set of named options, `enum.Enum` is the standard solution. It enforces that only valid choices can be used. There are, however, better options in my opinion.

### 2. `typing.Literal`

For simple cases where a full `Enum` class is unnecessary, `typing.Literal` allows a function to accept a specific set of string (or other literal) values.

```python
from typing import Literal

def set_alignment(alignment: Literal["left", "center", "right"]):
    # type checker will flag any value other than the three allowed strings
    # ... implementation ...

set_alignment("center")  # ok
# set_alignment("middle") # static analysis error
```

This is especially nice as it keep everything neatly tied in the function signature, and also means the user doesn't need to import the Enum.

### 3. Union of Dataclasses (poor mans ADT)

When different states must carry different data, a union of dataclasses is an a very strong pattern. It emulates the algebraic data types (ADTs) found in other languages, like Rust (so it has to be good).

For our `UserStatus` example, an `Inactive` state might need a `last_seen` timestamp, while an `Away` state could have a custom message.

```python
from dataclasses import dataclass
from datetime import datetime

@dataclass
class Active:
    pass

@dataclass
class Inactive:
    last_seen: datetime

@dataclass
class Away:
    message: str

# define the composite type as a union of the individual states
UserStatus = Active | Inactive | Away

def handle_status(status: UserStatus):
    match status:
        case Active():
            print("User is online.")
        case Inactive(last_seen):
            print(f"User is inactive. Last seen: {last_seen.isoformat()}")
        case Away(message):
            print(f"User is away: '{message}'")

# usage is type-safe and explicit
handle_status(Inactive(last_seen=datetime.now()))
handle_status(Away(message="On lunch"))
```

## Conclusion

Overusing booleans for state management can lead to brittle designs that require breaking changes or runtime validation. By considering `Literal` unions, or unions of dataclasses, you can build APIs that are clearer, more robust, and prepared for future requirements. If that hanging boolean is going to be part of your public API, it might be worth spending the extra time to represent it properly.