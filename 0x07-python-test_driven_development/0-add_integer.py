#!/usr/bin/python3
"""Adding integers"""


def add_integer(a, b=98):
    """Adds two numbers
    Args:
        a - first number input
        b - seconde number input
    """

    if type(a) not in [int, float]:
        raise TypeError("a must be an integer")
    if type(b) not in [int, float]:
        raise TypeError("b must be an integer")
    return int(a) + int(b)
