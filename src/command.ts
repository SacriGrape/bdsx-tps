import {command} from "bdsx/command";
import {getTps} from "./NativeModule";
import {events} from "bdsx/event";

events.serverOpen.on(() => {
    command
        .register('tps', 'Shows you the current TPS!')
        .overload((_p, _o, output) => {
            const tps = getTps();

            output.success(`The server is currently running at ${tps}/20 tps!`);
        }, {})
})
