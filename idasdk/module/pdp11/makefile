PROC=pdp11

include ../module.mak

# MAKEDEP dependency list ------------------
$(F)ana$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp   \
	          $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp $(I)idp.hpp          \
	          $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp               \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp ana.cpp ins.hpp     \
	          pdp.hpp pdp_ml.h
$(F)emu$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp   \
	          $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp $(I)idp.hpp          \
	          $(I)ints.hpp $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp  \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp emu.cpp ins.hpp     \
	          pdp.hpp pdp_ml.h
$(F)ins$(O)     : $(I)area.hpp $(I)bitrange.hpp $(I)bytes.hpp $(I)fpro.h     \
	          $(I)funcs.hpp $(I)ida.hpp $(I)idp.hpp $(I)kernwin.hpp     \
	          $(I)lines.hpp $(I)llong.hpp $(I)nalt.hpp $(I)netnode.hpp  \
	          $(I)pro.h $(I)segment.hpp $(I)ua.hpp $(I)xref.hpp         \
	          ins.cpp ins.hpp
$(F)out$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp   \
	          $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp $(I)idp.hpp          \
	          $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp               \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp ins.hpp out.cpp     \
	          pdp.hpp pdp_ml.h
$(F)reg$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp   \
	          $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp $(I)idp.hpp          \
	          $(I)ieee.h $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp    \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp chkarg.cpp float.c  \
	          ins.hpp pdp.hpp pdp_ml.h reg.cpp
