"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const NativeModule_1 = require("./NativeModule");
const event_1 = require("bdsx/event");
event_1.events.serverOpen.on(() => {
    command_1.command
        .register('tps', 'Shows you the current TPS!')
        .overload((_p, _o, output) => {
        const tps = (0, NativeModule_1.getTps)();
        output.success(`The server is currently running at ${tps}/20 tps!`);
    }, {});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBcUM7QUFDckMsaURBQXNDO0FBQ3RDLHNDQUFrQztBQUVsQyxjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEIsaUJBQU87U0FDRixRQUFRLENBQUMsS0FBSyxFQUFFLDRCQUE0QixDQUFDO1NBQzdDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBQSxxQkFBTSxHQUFFLENBQUM7UUFFckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQ0FBc0MsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN4RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFDZCxDQUFDLENBQUMsQ0FBQSJ9