import {NativeModule} from "bdsx/dll";
import {int32_t} from "bdsx/nativetype";
import {events} from "bdsx/event";
import {pdbcache} from "bdsx/pdbcache";

const dll = NativeModule.load(__dirname + "\\bdsx_tps_info.dll")

const init = dll.getFunction(
    'init',
    int32_t,
    null,
    int32_t, // Level::tick offset
)

export const getTps = dll.getFunction(
    'get_tps',
    int32_t,
    null,
)

events.serverOpen.on(() => {
    init(
        pdbcache.search('?tick@Level@@UEAAXXZ'),
    )
})