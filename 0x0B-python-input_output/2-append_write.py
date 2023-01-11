#!/usr/bin/python3
"""Append to a file"""


def write_file(filename="", text=""):
    """appends a string to UTF8 text file.

    Args:
        filename(str): The name of the file to write.
        text(str): The text to write to the file.

    Return: The number of characters written.
    """
    with open(filename, "a", encoding="utf-8") as f:
        return f.write(text)
