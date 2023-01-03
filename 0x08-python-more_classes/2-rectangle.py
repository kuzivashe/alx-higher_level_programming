#!/usr/bin/python3
"""A rectangle based on 0-rectangle"""


class Rectangle:
    """Defines the implementation of a rectangle"""

    def __init__(self, width=0, height=0):
        self.width = width
        self.height = height

    @property
    def width(self):
        """Property retriever for retrieving"""
        return self.__width

    @width.setter
    def width(self, value):
        """Property setter, for setting"""
        if not isinstance(value, int):
            raise TypeError("width must be an integer")

        if value < 0:
            raise ValueError("width must be >= 0")

        self.__width = value

    @property
    def height(self):
        """Property retriever, for retriving the rectangle"""
        return self.__height

    @height.setter
    def height(self, value):
        if not isinstance(value, int):
            raise ValueError("height must be an integer")

        if value < 0:
            raise ValueError("height must be >= 0")

        self.__height = value

    def area(self):
        """Public instance method that returns the rectangle area"""
        rectangle_area = self.__height * self.__width
        return rectangle_area

    def perimeter(self):
        """Public instance method that returns the rectangle perimeter"""
        if self.__width == 0 or self.__height == 0:
            return (0)
        rectangle_params = ((2 * self.__height) + (2 * self.__width))

        return rectangle_params
