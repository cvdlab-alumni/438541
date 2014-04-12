from pyplasm import *
from exercise1 import *

#defining the extra structures

plane =(PROD([QUOTE([36]),QUOTE([9])]))
half_circle = MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(PI)(10))
window =(JOIN([half_circle,(MKPOL([[[-1,0],[-1,-1.7],[1,-1.7],[1,0]],[[1,2,3,4]],(None)]))]))
s_window = PROD([window,Q(1.3)])
s2_window = PROD([S([1,2])([1.3,1.3])(window),Q(1.3)])
ark_n = COLOR([0.75,0.75,0.50])((T([1,2,3])([18,4.5])(DIFFERENCE([s2_window,s_window]))))
ark_0 = COLOR([0.75,0.75,0.50])((T([1,2,3])([18,4.8])(DIFFERENCE([s2_window,s_window]))))
window_internal = (COLOR([1,1,1])(T([1,2,3])([18,4.5,.7])(PROD([window,Q(0.1)]))))

#generating the base enclosures

wall_define = T(3)(-0.05)(PROD([PROD([Q(.5),Q(9)]),Q(1.15)]))
wd_list = STRUCT([T(1)(2)(wall_define),T(1)(6)(wall_define),T(1)(10)(wall_define),T(1)(14)(wall_define),T(1)(21.5)(wall_define),T(1)(25.5)(wall_define),T(1)(29.5)(wall_define)])

#VIEW(wd_list)

plane =(PROD([QUOTE([36]),QUOTE([9])]))

north_w = R([2,3])(PI/2)(STRUCT([PROD([(DIFFERENCE([plane,T([1,2])([18,4.5])(window)])),Q(1)]),ark_n,window_internal,wd_list]))
west_w = R([1,2])(PI/2)(north_w)
south_w = T([1,2])([36,36])(R([1,2])(PI/2)(west_w))
east_w = T([1,2])([72,0])(R([1,2])(PI/2)(south_w))

north = R([2,3])(PI/2)(STRUCT([PROD([plane,Q(1)]),wd_list]))
west = R([1,2])(PI/2)(north)
south = T([1,2])([36,36])(R([1,2])(PI/2)(west))
east = T([1,2])([72,0])(R([1,2])(PI/2)(south))
north_d = R([2,3])(PI/2)(STRUCT([PROD([(DIFFERENCE([plane,T([1,2])([18,4.8])(window)])),Q(1)]),ark_0,wd_list]))



#generating the solid enclosures


basew = COLOR([0.80,0.80,0.68])(T([1,2])([2,2])(STRUCT([north_w,west_w,south_w,east_w])))
base0 = COLOR([0.80,0.80,0.68])(T([1,2])([2,2])(STRUCT([north_d,west,south,east])))
base1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(basew))
base2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(base1))
base3 = T([1,2,3])([1.61,1.61,9])(S([1,2])([0.90,0.90])(base2))
base4 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base3))
base5 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base4))
base6 = T([1,2,3])([2.5,2.5,9])(S([1,2])([0.90,0.90])(base5))

gradino = CUBOID([0.001,0.001,0.001])
scala = gradino
for i in range(56):
	gradino = CUBOID([1,(4-((i)*0.05)),0.3])
	scala = STRUCT([scala, T([2,3])([i*0.05,i*0.05])(gradino)])


scala1 = T([1,2])([16,0.026])(R([2,1])(PI/2)(scala))
scala2 = T([1,2])([24,-0.95])(R([2,1])(-PI/2)(scala))

scala_esterna = COLOR([.8,.8,.8])(T([1,2])([0,-5])(STRUCT([scala1,scala2])))

gradino = CUBOID([2.5,1.5,0.2])
scala= gradino
for i in range(1,14):
	scala = STRUCT([scala, T([2,3])([i*1.1,i*0.2])(gradino)])

scala= STRUCT([scala, T([1,2,3])([0,15.36,2.6])(PROD([PROD([Q(3),Q(3)]),Q(0.2)]))])


scala1 = T([1,2,3])([12,13,3.25])(R([2,1])(PI/2)(scala))
scala2 = T([1,2,3])([40.5,-0.5,2.8])(R([2,1])(-PI/2)(scala1))
scala3 = T([1,2,3])([40,0.5,2.8])(R([2,1])(-PI/2)(scala2))
scala4 = T([1,2,3])([40.25,0.125,2.8])(R([2,1])(-PI/2)(scala3))
s0 = STRUCT([scala1,scala2,scala3,scala4])
sf = T([1,2,3])([-.25,-.25,44])(STRUCT([scala1,scala2,scala3]))

scala_interna = STRUCT([s0,T(3)(11)(s0),T(3)(22)(s0),T(3)(33)(s0),sf])

scale = COLOR([.9,.8,.4])(STRUCT([scala_esterna,scala_interna]))

v_enclosures = STRUCT([base0,base1,base2,base3,base4,base5,base6])

building = STRUCT([v_enclosures,h_partitions,scale])

VIEW(building)