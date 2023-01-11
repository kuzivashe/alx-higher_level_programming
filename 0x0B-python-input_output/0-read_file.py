#!/usr/bin/python3
"""Read file"""


def read_file(filename=""):
    """a function that reads a UTF8 text file
    and prints it out to stdout

    Args:
        filename(any): ame of the file
    """
    with open(filename, encoding="utf-8") as f:
        print(f.read(), end="")
