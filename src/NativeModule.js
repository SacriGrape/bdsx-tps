"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTps = void 0;
const dll_1 = require("bdsx/dll");
const nativetype_1 = require("bdsx/nativetype");
const event_1 = require("bdsx/event");
const pdbcache_1 = require("bdsx/pdbcache");
const dll = dll_1.NativeModule.load(__dirname + "\\bdsx_tps_info.dll");
const init = dll.getFunction('init', nativetype_1.int32_t, null, nativetype_1.int32_t);
exports.getTps = dll.getFunction('get_tps', nativetype_1.int32_t, null);
event_1.events.serverOpen.on(() => {
    init(pdbcache_1.pdbcache.search('?tick@Level@@UEAAXXZ'));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF0aXZlTW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTmF0aXZlTW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtDQUFzQztBQUN0QyxnREFBd0M7QUFDeEMsc0NBQWtDO0FBQ2xDLDRDQUF1QztBQUV2QyxNQUFNLEdBQUcsR0FBRyxrQkFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBQTtBQUVoRSxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsV0FBVyxDQUN4QixNQUFNLEVBQ04sb0JBQU8sRUFDUCxJQUFJLEVBQ0osb0JBQU8sQ0FDVixDQUFBO0FBRVksUUFBQSxNQUFNLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FDakMsU0FBUyxFQUNULG9CQUFPLEVBQ1AsSUFBSSxDQUNQLENBQUE7QUFFRCxjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUNBLG1CQUFRLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQzFDLENBQUE7QUFDTCxDQUFDLENBQUMsQ0FBQSJ9