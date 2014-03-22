from pyplasm import *

import exercise1
import exercise2

plane =(PROD([QUOTE([36]),QUOTE([9])]))
half_circle = MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(PI)(10))
window =(JOIN([half_circle,(MKPOL([[[-1,0],[-1,-1.7],[1,-1.7],[1,0]],[[1,2,3,4]],(None)]))]))

north = R([2,3])(PI/2)(PROD([(DIFFERENCE([plane,T([1,2])([18,4.5])(window)])),Q(1)]))
west = R([1,2])(PI/2)(north)
south = T([1,2])([36,36])(R([1,2])(PI/2)(west))
east = T([1,2])([72,0])(R([1,2])(PI/2)(south))

base0 = COLOR([0.82,0.75,0.54])(T([1,2])([2,2])(STRUCT([north,west,south,east])))
base1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base0))
base2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(base1))
base3 = T([1,2,3])([1.61,1.61,9])(S([1,2])([0.90,0.90])(base2))
base4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(base3))
base5 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base4))

structure = STRUCT([base0,base1,base2,base3,base4,base5])

roof_down = exercise1.floor1
roof_middle=T([1,2,3])([-2,-2,.5])(S([1,2])([1.05,1.05])(roof_down))
roof_up = T(3)(-8)(exercise1.floor2)

roof0 = COLOR([0.57,0.77,0.45])((JOIN([roof_middle,roof_down,roof_up])))
roof1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(roof0))
roof2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(roof1))
roof3 = T([1,2,3])([1.5,1.5,9])(S([1,2])([0.90,0.90])(roof2))
roof4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(roof3))
roof5 = T([1,2,3])([2.1,2.1,9])(S([1,2])([0.90,0.90])(roof4))

roof_top = JOIN([T([1,2,3])([10,10,4])(S([1,2])([0.50,0.50])(roof5)),roof5])

roofs = STRUCT([roof0,roof1,roof2,roof3,roof4,roof_top])



VIEW(STRUCT([roofs, structure]))