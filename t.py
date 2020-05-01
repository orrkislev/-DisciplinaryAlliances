f = open("list.txt",'r',encoding="utf-8")
d = []
for i in f:
        a = i.strip()
        if a[0] == '"':
            start = a[1:]
        elif a[-1] == '"':
            end = a[:-1]
            phrase = start +" "+end
            d.append(phrase)
        else:
            d.append(a)

txt = 'list=['
for a in d:
    a = a.replace('�','')
    txt += '"'+a+'",'
txt = txt[:-1] + ']'

with open('list.js','w') as file:
    file.write(txt)