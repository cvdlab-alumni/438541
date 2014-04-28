from needed import *

points_head1= vectTranslatePoints([2.88,0,6.27])([[2.6,0, 6.27], [2.37,0, 7.2], [2.56,0, 7.19], [2.88,0, 7.27]])

profile_head1 = BEZIER(S1)(points_head1)
profile_head2 = BEZIER(S1)([[0,0,0], [0,0, 1]])


dom2D = PROD(AA(dom)([24, 1]))
dom3D = PROD([dom2D, S(1)(2*PI)(INTERVALS(1)(24))])

head_section = BEZIER(S2)([profile_head1, profile_head2])


head = MAP(ROTATIONALSOLID(head_section))(dom3D)


points_torso1= vectTranslatePoints([2.88,0,4.87])([[2.58,0, 4.87], [2.37,0, 5.35], [2.32,0, 6.05], [2.88,0, 6]])
points_torso2= vectTranslatePoints([2.88,0,4.87])([[2.88,0,4.87],[2.88,0,6]])


profile_torso1 = BEZIER(S1)(points_torso1)
profile_torso2 = BEZIER(S1)(points_torso2)

torso_section = BEZIER(S2)([profile_torso1, profile_torso2])
torso = MAP(ROTATIONALSOLID(torso_section))(dom3D)

points_junction1 = vectTranslatePoints([2.84,0,5.98])([[2.84,0, 6.28], [2.92,0, 6.4], [2.46,0, 6.07], [2.84,0, 5.98]])
points_junction2 = vectTranslatePoints([2.84,0,5.98])([[2.84,0,6.28],[2.84,0,5.98]])

profile_junction1 = BEZIER(S1)(points_junction1)
profile_junction2 = BEZIER(S1)(points_junction2)

junction_section = BEZIER(S2)([profile_junction1, profile_junction2])
neck = COLOR(BROWN)(MAP(ROTATIONALSOLID(junction_section))(dom3D))

head= (STRUCT([T(3)(1.3)(head),T(3)(1.1)(neck)]))

shoulder1= (T([1,3])([-.65,.8])(R([1,3])(-PI/2)(neck)))
shoulder2= T([1,3])([.65,.8])(R([1,3])(PI/2)(neck))

points_bulk1 = addYValue(crotatePoints(vectTranslatePoints([4.01,4.59])([[3.52, 5.44], [3.18, 5.35], [3.92, 4.6], [3.93, 4.48]]),-PI/6.25),0)
points_bulk2 = addYValue(crotatePoints(vectTranslatePoints([4.01,4.59])([[3.52, 5.47], [4.01, 4.59]]),-PI/6.25),0)

profile_bulk1 = BEZIER(S1)(points_bulk1)
profile_bulk2 = BEZIER(S1)(points_bulk2)

bulk_section = BEZIER(S2)([profile_bulk1, profile_bulk2])
bulk = (MAP(ROTATIONALSOLID(bulk_section))(dom3D))

bulk1 = (T([1,3])([-1.3,.10])(R([1,3])(-PI/4)(bulk)))
bulk2 = (T([1,3])([1.3,.10])(R([1,3])(PI/4)(bulk)))

bulk_1 = STRUCT([shoulder1,bulk2])
bulk_2 = STRUCT([shoulder2,bulk1])

points_uarm1 = addYValue(crotatePoints(vectTranslatePoints([3.88,3.44])([[3.39, 3.96], [3.48, 4.34], [4.11, 4.6], [3.99, 4.54]]),PI/3.8),0)
points_uarm2 = addYValue(crotatePoints(vectTranslatePoints([3.44,3.88])([[3.44, 3.88], [4.08, 4.48]]),PI/3.8),0)


profile_uarm1 = BEZIER(S1)(points_uarm1)
profile_uarm2 = BEZIER(S1)(points_uarm2)

uarm_section = BEZIER(S2)([profile_uarm1, profile_uarm2])
uarm = (MAP(ROTATIONALSOLID(bulk_section))(dom3D))
small_junction = R([1,3])(PI)(S([1,2,3])([.8,.8,.8])(neck))
uarm = STRUCT([uarm,T([1,3])([.025,1.15])(small_junction)])

uarm1 = T([1,3])([-1.4,-1.05])(R([1,3])(0)(uarm))
uarm2 = T([1,3])([1.4,-1.05])(R([1,3])(0)(uarm))

points_hand1 = addYValue(crotatePoints(vectTranslatePoints([1.43,4.07])([[1.43, 4.07], [1.31, 4.16], [2.01, 4.1], [1.71, 3.62]]),4*PI/4.87),0)
points_hand2 = addYValue(crotatePoints(vectTranslatePoints([1.43,4.07])([[1.43, 4.07], [1.71, 3.62]]),4*PI/4.87),0)

dom3D_hand = PROD([dom2D, S(1)(PI)(INTERVALS(1)(24))])

profile_hand1 = BEZIER(S1)(points_hand1)
profile_hand2 = BEZIER(S1)(points_hand2)

hand_section = BEZIER(S2)([profile_hand1, profile_hand2])
hand = (MAP(ROTATIONALSOLID(hand_section))(dom3D_hand))
hand = R([1,3])(0)(STRUCT([T(2)(.05)(hand),T([3])(.7)((small_junction))]))

hand1 = T([1,3])([-1.4,-1.78])(R([1,2])(-PI/2)(hand))
hand2 = T([1,3])([1.4,-1.78])(R([1,2])(PI/2)(hand))

arms = STRUCT([bulk_1,uarm1,bulk_2,uarm2,hand1,hand2])

body = STRUCT([head,torso,arms])

ankle = S([1,2])([1.5,1.4])(neck)

low_ankle_p1 = addYValue(crotatePoints(vectTranslatePoints([2.8,3.74])([[2.47, 3.75], [2.35, 4.15], [2.53, 4.49], [2.58, 4.55]]),PI/15),0)
low_ankle_p2 = addYValue(vectTranslatePoints([2.8, 3.74])([[2.8, 3.74], [2.8, 4.54]]),0)

low_ankle_prof1 = BEZIER(S1)(low_ankle_p1)
low_ankle_prof2 = BEZIER(S1)(low_ankle_p2)

low_ankle_section = BEZIER(S2)([low_ankle_prof1,low_ankle_prof2])
low_ankle = MAP(ROTATIONALSOLID(low_ankle_section))(dom3D)

ankle=STRUCT([T(3)(.7)(ankle),low_ankle])

body = STRUCT([T(3)(.9)(body),ankle])


uleg_p1 = addYValue(crotatePoints(vectTranslatePoints([3.23,2.15])([[3.06, 2.16], [3.19, 2.22], [2.74, 3.25], [2.91, 3.42]]),-PI/48),0)
uleg_p2 = addYValue(crotatePoints(vectTranslatePoints([3.23, 2.15])([[3.23, 2.15], [3.15, 3.43]]),-PI/48),0)

uleg_prof1 = BEZIER(S1)(uleg_p1)
uleg_prof2 = BEZIER(S1)(uleg_p2)

uleg_section = BEZIER(S2)([uleg_prof1,uleg_prof2])
uleg = MAP(ROTATIONALSOLID(uleg_section))(dom3D)

uleg1 = STRUCT([T(1)(-.3)(uleg),T([1,3])([-.28,1.2])(neck)])
uleg2 = STRUCT([T(1)(.3)(uleg),T([1,3])([.28,1.2])(neck)])

lleg_p1 = addYValue(crotatePoints(vectTranslatePoints([3.47,0.67])([[3.33, 0.67], [3.42, 0.52], [3.06, 1.86], [3.13, 2.05]]),-PI/27),0)
lleg_p2 = addYValue(crotatePoints(vectTranslatePoints([3.47, 0.67])([[3.47, 0.67], [3.3, 2.04]]),-PI/27),0)

lleg_prof1 = BEZIER(S1)(lleg_p1)
lleg_prof2 = BEZIER(S1)(lleg_p2)

lleg_section = BEZIER(S2)([lleg_prof1,lleg_prof2])
lleg = MAP(ROTATIONALSOLID(lleg_section))(dom3D)

lleg1 = STRUCT([T(1)(-.3)(lleg),T([1,3])([-.30,1.6])(small_junction)])
lleg2 = STRUCT([T(1)(.3)(lleg),T([1,3])([.30,1.6])(small_junction)])

legs = STRUCT([T(3)(1.55)(uleg1),T(3)(1.55)(uleg2),T(3)(.0)(lleg1),T(3)(.0)(lleg2)])
body = STRUCT([T(3)(3.1)(body),legs])



foot_p1 = addYValue(crotatePoints(vectTranslatePoints([3.7,0.41])([[3.43, 0.53], [3.45, 0.51], [2.85, 0.38], [2.85, 0.11]]),-PI/1.65),0)
foot_p2 = addYValue(crotatePoints(vectTranslatePoints([3.7, 0.41])([[3.43, 0.53], [3.49, 0.53], [3.6, 0.64], [3.7, 0.41]]),-PI/1.65),0)

foot_prof1 = BEZIER(S1)(foot_p1)
foot_prof2 = BEZIER(S1)(foot_p2)

foot_section = BEZIER(S2)([foot_prof1,foot_prof2])
foot = MAP(ROTATIONALSOLID(foot_section))(dom3D_hand)

feet1 = STRUCT([T([2,1])([.1,-.3])(R([2,3])(PI/2)(foot)),T([1,3])([-.30,.32])(small_junction)])
feet2 = STRUCT([T([2,1])([.1,.3])(R([2,3])(PI/2)(foot)),T([1,3])([.30,.32])(small_junction)])

body = STRUCT([T(3)(.3)(body),feet1,feet2])

VIEW(body)

