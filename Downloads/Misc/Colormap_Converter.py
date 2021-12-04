from PIL import Image
import os

fileDir = os.getcwd()
fileDir = fileDir.replace('\\', '/')
fileDir = fileDir + '/'

def imageProcessing():
  inputImage = fileDir + 'input.png'
  
  openedImage = Image.open(inputImage).convert("RGBA")
  
  openedImageCopy = openedImage.copy()
  
  biomePixelRiver = openedImage.getpixel((7, 0))
  for x in range(0, 256):
    for y in range(0, 256):
      openedImageCopy.putpixel((x, y), biomePixelRiver)
  
  biomePixel1 = openedImage.getpixel((127, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((0, y), biomePixel1)
  
  biomePixel2 = openedImage.getpixel((1, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((1, y), biomePixel2)
  
  biomePixel3 = openedImage.getpixel((129, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((2, y), biomePixel3)
  
  biomePixel4 = openedImage.getpixel((3, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((3, y), biomePixel4)
  
  biomePixel5 = openedImage.getpixel((140, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((4, y), biomePixel5)
  
  biomePixel6 = openedImage.getpixel((2, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((5, y), biomePixel6)
  
  biomePixel7 = openedImage.getpixel((6, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((6, y), biomePixel7)
  
  biomePixel8 = openedImage.getpixel((4, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((7, y), biomePixel8)
  
  biomePixel9 = openedImage.getpixel((132, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((8, y), biomePixel9)
  
  biomePixel10 = openedImage.getpixel((27, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((9, y), biomePixel10)
  
  biomePixel11 = openedImage.getpixel((29, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((10, y), biomePixel11)
  
  #biomePixel12 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((11, y), biomePixel12)
  #
  #biomePixel13 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((12, y), biomePixel13)
  #
  #biomePixel14 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((13, y), biomePixel14)
  #
  biomePixel15 = openedImage.getpixel((5, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((14, y), biomePixel15)
  
  biomePixel16 = openedImage.getpixel((30, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((15, y), biomePixel16)
  
  biomePixel17 = openedImage.getpixel((35, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((16, y), biomePixel17)
  
  biomePixel18 = openedImage.getpixel((36, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((17, y), biomePixel18)
  
  #biomePixel19 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((18, y), biomePixel19)
  #
  #biomePixel20 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((19, y), biomePixel20)
  #
  #biomePixel21 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((20, y), biomePixel21)
  #
  #biomePixel22 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((21, y), biomePixel22)
  
  biomePixel23 = openedImage.getpixel((21, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((22, y), biomePixel23)
  
  #biomePixel24 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((23, y), biomePixel24)
  
  biomePixel25 = openedImage.getpixel((168, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((24, y), biomePixel25)
  
  biomePixel26 = openedImage.getpixel((37, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((25, y), biomePixel26)
  
  biomePixel27 = openedImage.getpixel((165, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((26, y), biomePixel27)
  
  #biomePixel28 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((27, y), biomePixel28)
  #
  #biomePixel29 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((28, y), biomePixel29)
  #
  #biomePixel30 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((29, y), biomePixel30)
  #
  #biomePixel31 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((30, y), biomePixel31)
  #
  #biomePixel32 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((31, y), biomePixel32)
  #                          
  #biomePixel33 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((32, y), biomePixel33)
  #                          
  #biomePixel34 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((33, y), biomePixel34)
                            
  biomePixel35 = openedImage.getpixel((7, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((34, y), biomePixel35)
                            
  biomePixel36 = openedImage.getpixel((11, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((35, y), biomePixel36)
                            
  biomePixel37 = openedImage.getpixel((16, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((36, y), biomePixel37)
                            
  biomePixel38 = openedImage.getpixel((26, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((37, y), biomePixel38)
                            
  biomePixel39 = openedImage.getpixel((25, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((38, y), biomePixel39)
                            
  biomePixel40 = openedImage.getpixel((44, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((39, y), biomePixel40)
  
  biomePixel41 = openedImage.getpixel((45, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((40, y), biomePixel41)
  
  biomePixel42 = openedImage.getpixel((48, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((41, y), biomePixel42)
  
  biomePixel43 = openedImage.getpixel((0, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((42, y), biomePixel43)
  
  biomePixel44 = openedImage.getpixel((24, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((43, y), biomePixel44)
  
  biomePixel45 = openedImage.getpixel((46, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((44, y), biomePixel45)
  
  biomePixel46 = openedImage.getpixel((49, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((45, y), biomePixel46)
  
  biomePixel47 = openedImage.getpixel((10, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((46, y), biomePixel47)
  
  biomePixel48 = openedImage.getpixel((50, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((47, y), biomePixel48)
  
  biomePixel49 = openedImage.getpixel((14, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((48, y), biomePixel49)
  
  #biomePixel50 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((49, y), biomePixel50)
  #
  #biomePixel51 = openedImage.getpixel((0, 0))
  #for y in range(0, 256):
  #  openedImageCopy.putpixel((50, y), biomePixel51)
  
  biomePixel52 = openedImage.getpixel((8, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((51, y), biomePixel52)
  
  biomePixel53 = openedImage.getpixel((172, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((52, y), biomePixel53)
  
  biomePixel54 = openedImage.getpixel((171, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((53, y), biomePixel54)
  
  biomePixel55 = openedImage.getpixel((170, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((54, y), biomePixel55)
  
  biomePixel56 = openedImage.getpixel((173, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((55, y), biomePixel56)
  
  biomePixel57 = openedImage.getpixel((9, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((56, y), biomePixel57)
  
  biomePixel58 = openedImage.getpixel((42, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((57, y), biomePixel58)
  
  biomePixel59 = openedImage.getpixel((41, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((58, y), biomePixel59)
  
  biomePixel60 = openedImage.getpixel((40, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((59, y), biomePixel60)
  
  biomePixel61 = openedImage.getpixel((43, 0))
  for y in range(0, 256):
    openedImageCopy.putpixel((60, y), biomePixel61)
  
  for x in range(61, 256):
    for y in range(0, 256):
      openedImageCopy.putpixel((x, y), biomePixelRiver)
  
  openedImageFull = openedImageCopy.crop((0, 0, 256, 256))
  
  openedImageFull.save(fileDir + 'output.png')
  
imageProcessing()