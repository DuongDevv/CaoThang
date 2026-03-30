name = 'abcaba'
seen = []    
duplicates = [] 

for char in name:
    if char in seen:
        if char not in duplicates:
            duplicates.append(char)
    else:
        seen.append(char)

print(duplicates)
