
from random import randint
print("chi nhap 'keo , bua , bao' :")
player = input()
computer = randint(0,2)
if computer == 0: 
    computer ='keo'
if computer== 1:
    computer= ' bua'
if computer == 2:
    computer='bao'
  # ------

# ------
while True:
    print('----------')
    print('ban chon '+player)
    print('may chon '+computer)
    print('----------')
    print('ket qua:')  
    if player==computer:
        print('draw')
        break   
    else:
        if player=='keo':
            if computer=='bua':
                print('thua')
            if computer=='bao':
                print('win')
            break 
        if player=='bua':
            if computer=='bao':
                print('thua')
            else:
                print('win')
            break
        if player=='bao':
            if computer=='bua':
                print('win')
            else:
                print('thua')
            break
        else:
            print('nhap sai')
            print('moi nhap lai')
            player =input()
        continue

