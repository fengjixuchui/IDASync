PROC=i960
O1=oldtypes
ADDITIONAL_GOALS=config

include ../module.mak

config: $(C)i960.cfg

$(C)i960.cfg:  i960.cfg
	$(CP) $? $@

# MAKEDEP dependency list ------------------
$(F)ana$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp  \
	          $(I)diskio.hpp $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp       \
	          $(I)idp.hpp $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp   \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp ana.cpp i960.hpp    \
	          ins.hpp
$(F)emu$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp  \
	          $(I)diskio.hpp $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp       \
	          $(I)idp.hpp $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp   \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp emu.cpp i960.hpp    \
	          ins.hpp
$(F)ins$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp  \
	          $(I)diskio.hpp $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp       \
	          $(I)idp.hpp $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp   \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp i960.hpp ins.cpp    \
	          ins.hpp
$(F)oldtypes$(O): $(I)allow_deprecated.hpp $(I)area.hpp $(I)auto.hpp        \
	          $(I)bitrange.hpp $(I)bytes.hpp $(I)fpro.h $(I)funcs.hpp   \
	          $(I)ida.hpp $(I)idp.hpp $(I)kernwin.hpp $(I)lines.hpp     \
	          $(I)llong.hpp $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp    \
	          $(I)netnode.hpp $(I)offset.hpp $(I)pro.h $(I)queue.hpp    \
	          $(I)segment.hpp $(I)typeinf.hpp $(I)ua.hpp $(I)xref.hpp   \
	          ../idaidp.hpp ../old_callbacks.cpp oldtypes.cpp
$(F)out$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp  \
	          $(I)diskio.hpp $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp       \
	          $(I)idp.hpp $(I)kernwin.hpp $(I)lines.hpp $(I)llong.hpp   \
	          $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp $(I)netnode.hpp  \
	          $(I)offset.hpp $(I)pro.h $(I)queue.hpp $(I)segment.hpp    \
	          $(I)ua.hpp $(I)xref.hpp ../idaidp.hpp i960.hpp ins.hpp    \
	          out.cpp
$(F)reg$(O)     : $(I)area.hpp $(I)auto.hpp $(I)bitrange.hpp $(I)bytes.hpp  \
	          $(I)diskio.hpp $(I)fpro.h $(I)funcs.hpp $(I)ida.hpp       \
	          $(I)idp.hpp $(I)ieee.h $(I)kernwin.hpp $(I)lines.hpp      \
	          $(I)llong.hpp $(I)loader.hpp $(I)nalt.hpp $(I)name.hpp    \
	          $(I)netnode.hpp $(I)offset.hpp $(I)pro.h $(I)queue.hpp    \
	          $(I)segment.hpp $(I)typeinf.hpp $(I)ua.hpp $(I)xref.hpp   \
	          ../idaidp.hpp i960.hpp ins.hpp reg.cpp
