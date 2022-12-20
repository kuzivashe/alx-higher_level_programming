#!/usr/bin/python3
"""A class square that defines a square
by: (based on 1-square.py)

"""


class Square:
    """square class with a private attribute
    size.

    """

    def __init__(self, size=0):
        """Initializes the size variableas a private
        instance attribute

        Args:
            __size (int): The __size of the new square.

        """
        self.__size = size
        if not isinstance(size, int):
            raise TypeError("size must be an integer")
        elif size < 0:
            raise ValueError("size must be >= 0")
