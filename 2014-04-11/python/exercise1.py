from pyplasm import *

#basement

basement_plane = PROD([QUOTE([50]),QUOTE([50])])
base_border = T([1,2,3])([-5.5,-5.5,2.25])(PROD([PROD([QUOTE([51]),QUOTE([51])]),Q(.5)]))
base = COLOR([0.8,0.8,0.8])(T([1,2])([-5,-5])(PROD([basement_plane,Q(3)])))


#generating internal columns

column = JOIN([MAP(lambda x: [COS(x[0]),SIN(x[0]),3])(INTERVALS(2*PI)(10)),MAP(lambda x: [COS(x[0]),SIN(x[0]),12])(INTERVALS(2*PI)(10))])
column1 = T([1,2])([13.5,13.5])(column)
column2= T([1,2])([13.5,27])(column)
column3= T([1,2])([27,27])(column)
column4= T([1,2])([27,13.5])(column)
base_columns= COLOR(RED)(STRUCT([column1,column2,column3,column4]))

base = STRUCT([base,base_border,base_columns])

#floors

diff_base = T([1,2,3])([11,11,11])(PROD([PROD([Q(20),Q(20)]),Q(.5)]))

floor0 = PROD([(PROD([QUOTE([32]),QUOTE([32])])),Q(.5)])
floor1 = COLOR([1,1,1])(T([1,2,3])([3.75,3.75,11])(floor0))
floor_1 = STRUCT([DIFFERENCE([floor1,diff_base]),T(3)(9)(base_columns)]) 
floor2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.9,0.9])(floor1))
floor_2 = STRUCT([DIFFERENCE([floor2,T(3)(9)(diff_base)]),T(3)(18)(base_columns)]) 
floor3 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.9,0.9])(floor2))
floor_3 = STRUCT([DIFFERENCE([floor3,T(3)(18)(diff_base)]),T(3)(27)(base_columns)]) 
floor4 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.9,0.9])(floor3))
floor_4 = STRUCT([DIFFERENCE([floor4,T(3)(27)(diff_base)]),T(3)(36)(base_columns)]) 
floor5 = T([1,2,3])([2.5,2.5,9])(S([1,2])([0.9,0.9])(floor4))
floor_5 = STRUCT([DIFFERENCE([floor5,T(3)(36)(diff_base)]),T(3)(45)(base_columns)]) 
floor6 = T([1,2,3])([2.7,2.7,9])(S([1,2])([0.9,0.9])(floor5))
floor_6 = STRUCT([DIFFERENCE([floor6,T(3)(47)(diff_base)]),T(3)(54)(base_columns)]) 


intermedi = STRUCT([floor_1,floor_2,floor_3,floor_4,floor_5,floor_6])

#roofs

roof0 = (PROD([QUOTE([40]),QUOTE([40])]))
roof1 = COLOR([0.57,0.77,0.45])(T([3])(9)(roof0))
roof2 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(roof1))
roof3 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(roof2))
roof4 = T([1,2,3])([1.61,2.61,9])(S([1,2])([0.90,0.90])(roof3))
roof5 = T([1,2,3])([1.4,1.4,9])(S([1,2])([0.90,0.90])(roof4))
roof6 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(roof5))
roof7 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(roof5))

roof_down = roof1
roof_middle=T([1,2,3])([-1,-1,1])(S([1,2])([1.05,1.05])(roof_down))
roof_up = T([1,2,3])([0,0,-6.5])(roof2)
dif_roof = T([1,2])([2,2])(S([1,2])([0.9,0.9])(JOIN([roof_down,roof_up])))

#structuring the rooftops

roof0 = COLOR([0.50,0.50,0.50])(DIFFERENCE([((JOIN([roof_middle,roof_down,roof_up]))),dif_roof]))
roof1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(roof0))
roof2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(roof1))
roof3 = T([1,2,3])([1.5,1.5,9])(S([1,2])([0.90,0.90])(roof2))
roof4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(roof3))
roof5 = T([1,2,3])([2.1,2.1,9])(S([1,2])([0.90,0.90])(roof4))
roof6 = T([1,2,3])([2.1,2.1,9])(S([1,2])([0.90,0.90])(roof5))



roof_circle = T([1,2,3])([20.5,20.5,63])(MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(2*PI)(10)))
roof_top_1 = JOIN([roof5,T([1,2,3])([14.5,14.5,6])(S([1,2])([0.30,0.30])(roof7))])
roof_top_2 = JOIN([T([1,2,3])([14.5,14.5,6])(S([1,2])([0.30,0.30])(roof7)),roof_circle])
roof_sphere = JOIN([T([1,2,3])([20.5,20.5,63])(SPHERE(2)([8,24])),])
roof_sphere2 = JOIN([T([1,2,3])([20.5,20.5,64.3])(SPHERE(2)([8,24])),])
roof_spike = T([1,2,3])([20.5,20.5,64.5])(JOIN([SPHERE(1.8)([8,24]),T(3)(5)(SPHERE(0.3)([8,24]))]))
roof_top_3 = STRUCT([roof_sphere,roof_sphere2,roof_spike])
roof_top=COLOR([0.50,0.50,0.50])(T(3)(9)(STRUCT([roof_top_1,roof_top_2,roof_top_3])))

coperture = STRUCT([roof0,roof1,roof2,roof3,roof4,roof5,roof_top])

h_partitions = STRUCT([base,coperture,intermedi])

#VIEW(h_partitions)