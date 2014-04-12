from pyplasm import *
from exercise2 import *

#defining the area

area = STRUCT([T([1,2])([-35,-35])(PROD([PROD([Q(70),Q(70)]),Q(2)])),])
g_surroundings = COLOR(GREEN)((T([1,2])([-75.,-165])(PROD([Q(150),Q(200)]))))
temple_area = T([1,2])([-42.5,-165])(PROD([PROD([Q(85),Q(140)]),Q(.25)]))

#defining the neighbourg buildinings

gate_base = CUBOID([35,7.5,6])
gate_base = COLOR([0.80,0.80,0.68])(gate_base)
gate_roof = STRUCT([JOIN([CUBOID([40,15]),T([1,2,3])([2.5,4,2])(CUBOID([35,8]))]),JOIN([T([1,2,3])([9,7.5,8])(CUBOID([23,.5])),T([1,2,3])([4.5,4.5,2])(CUBOID([31,7]))])])
gate_roof = COLOR([0.57,0.77,0.45])(gate_roof)
temple10 = T([1,2])([-17.5,-45])(STRUCT([gate_base,T([1,2,3])([-2.5,-4,6])(gate_roof)]))
temple11 = T(2)(-60)(temple10)
temple12 = T(2)(-120)(temple10)

gate0_base = CUBOID([45,9,6])
gate0_base = COLOR([0.80,0.80,0.68])(gate0_base)
gate0_roof = STRUCT([JOIN([CUBOID([45,15]),T([1,2,3])([2.5,6.5,3])(CUBOID([40,2]))]),JOIN([T([1,2,3])([2.5,6.5,3])(CUBOID([40,2])),T([1,2,3])([2.825,7,3.5])(CUBOID([40,.25]))])])
gate0_roof = COLOR([0.57,0.77,0.45])(gate0_roof)
temple20 = T([1,2])([-30,-115])(R([1,2])(PI/2)(STRUCT([gate0_base,T([1,2,3])([-0,-2.85,6])((gate0_roof))])))
temple21 = T([1,2])([40,-115])(R([1,2])(PI/2)(STRUCT([gate0_base,T([1,2,3])([-0,-2.85,6])((gate0_roof))])))

gate1_base = CUBOID([25,10,6])
gate1_base = COLOR([0.80,0.80,0.68])(gate1_base)
gate1_roof = STRUCT([JOIN([CUBOID([25,15]),T([1,2,3])([0,3,3])(CUBOID([25,10]))]),JOIN([T([1,2,3])([0,3,3])(CUBOID([25,10])),T([1,2,3])([0,7.75,6])(CUBOID([25,0]))])])
gate1_roof = COLOR([0.57,0.77,0.45])(gate1_roof)
temple30 = T([1,2])([-30,-65])(R([1,2])(PI/2)(STRUCT([gate1_base,T([1,2,3])([-0,-2.85,6])((gate1_roof))])))
temple31 = T([1,2])([40,-65])(R([1,2])(PI/2)(STRUCT([gate1_base,T([1,2,3])([-0,-2.85,6])((gate1_roof))])))

temples= STRUCT([temple10,temple11,temple20,temple21,temple30,temple31,temple12])

borderns = PROD([PROD([Q(150),(Q(1))]),Q(1)])
borderew = PROD([PROD([Q(1),Q(200)]),Q(1)])

bordi = STRUCT([T([1,2])([-75,-165])(borderns),T([1,2])([-75,35])(borderns),T([1,2])([75,-165])(borderew),T([1,2])([-75,-165])(borderew)])

small_area_plan= STRUCT([(T([1,2,3])([-20,-20,2])(building)),area,g_surroundings,temple_area,temples,bordi])

VIEW(small_area_plan)

