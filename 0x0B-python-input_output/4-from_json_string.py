#!/usr/bin/python3
"""FROM JSON string"""
import json


def from_json_string(my_str):
    """Return: a python object representation of a JSON string
    """
    return json.loads(my_str)
