from django.core.files.storage import default_storage

def get_file():
    try:
        f = default_storage.open(f"../files/")
        return f.read().decode("utf-8")
    except FileNotFoundError:
        return None