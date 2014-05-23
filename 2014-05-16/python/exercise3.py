from exercise2 import *

def automatizedDiagramMerge(master,mergeTo,diagram):
	V,CV = master
	sort = sorted(mergeTo,reverse=True)
	for i in mergeTo:
        	master = diagram2cell(master,diagram,i)	
   	return master 	

def automatizedDiagramNumbering(master):
	V,CV = master
	hpc = SKEL_1(STRUCT(MKPOLS(first)))
	hpc = cellNumbering (first,hpc)(range(len(first[1])),CYAN,2)
  	return hpc
	
def automatizedDiagramRemove(master,removeTo):
	V,CV = master
	master = V,[cell for k,cell in enumerate(CV) if not (k in removeTo)]	
	return master			