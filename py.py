import os


folder_path = os.getcwd()

for name in os.listdir(folder_path):
    if name.startswith("Level "):
        try:
            # Extract the number after "level "
            number = int(name.split("Level ")[1])
            # Format with 3 digits
            new_name = f"Level {number:03d}"


            if new_name != name:
                os.rename(name, new_name)
                print(f"Renamed: {name} → {new_name}")
            else:
                print(f"Skipped (already correct): {name}")
        except ValueError:
            # In case the part after "level " is not a number
            print(f"Skipped (not numeric): {name}")
