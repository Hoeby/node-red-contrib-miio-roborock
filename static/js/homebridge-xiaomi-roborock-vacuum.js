'use strict';


class XiaomiRoborockVacuum {
    static get models() {
        return {
            'rockrobo.vacuum.v1': XiaomiRoborockVacuum.speedmodes_gen1,
            'roborock.vacuum.c1': XiaomiRoborockVacuum.speedmodes_gen1,
            'roborock.vacuum.s5': XiaomiRoborockVacuum.speedmodes_gen2,
            'roborock.vacuum.s6': XiaomiRoborockVacuum.speedmodes_gen3,
        }
    }

    static get speedmodes_gen1() {
        return [
            // 0%       = Off / Aus
            { homekitTopLevel: 0, miLevel: 0, name: "Off" },
            // 1-38%   = "Quiet / Leise"
            { homekitTopLevel: 38, miLevel: 38, name: "Quiet" },
            // 39-60%  = "Balanced / Standard"
            { homekitTopLevel: 60, miLevel: 60, name: "Balanced" },
            // 61-77%  = "Turbo / Stark"
            { homekitTopLevel: 77, miLevel: 77, name: "Turbo" },
            // 78-100% = "Full Speed / Max Speed / Max"
            { homekitTopLevel: 100, miLevel: 90, name: "Max" }
        ];
    }

    static get speedmodes_gen2() {
        return [
            // 0%      = Off / Aus
            { homekitTopLevel: 0, miLevel: 0, name: "Off" },
            // 1-15%   = "Mop / Mopping / Nur wischen"
            { homekitTopLevel: 15, miLevel: 105, name: "Mop" },
            // 16-38%  = "Quiet / Leise"
            { homekitTopLevel: 38, miLevel: 38, name: "Quiet" },
            // 39-60%  = "Balanced / Standard"
            { homekitTopLevel: 60, miLevel: 60, name: "Balanced" },
            // 61-75%  = "Turbo / Stark"
            { homekitTopLevel: 75, miLevel: 75, name: "Turbo" },
            // 76-100% = "Full Speed / Max Speed / Max"
            { homekitTopLevel: 100, miLevel: 100, name: "Max" }
        ];
    }

    static get speedmodes_gen3() {
        return [
            // 0%      = Off / Aus
            { homekitTopLevel: 0, miLevel: 0, name: "Off" },
            // 1-38%   = "Quiet / Leise"
            { homekitTopLevel: 38, miLevel: 101, name: "Quiet" },
            // 39-60%  = "Balanced / Standard"
            { homekitTopLevel: 60, miLevel: 102, name: "Balanced" },
            // 61-77%  = "Turbo / Stark"
            { homekitTopLevel: 77, miLevel: 103, name: "Turbo" },
            // 78-100% = "Full Speed / Max Speed / Max"
            { homekitTopLevel: 100, miLevel: 104, name: "Max" }
        ];
    }

    // From https://github.com/aholstenson/miio/blob/master/lib/devices/vacuum.js#L128
    static get cleaningStatuses() {
        return [
            'cleaning',
            'spot-cleaning',
            'zone-cleaning'
        ];
    }

    static get errors() {
        return {
            id1: { description: 'Try turning the orange laserhead to make sure it isnt blocked.' },
            id2: { description: 'Clean and tap the bumpers lightly.' },
            id3: { description: 'Try moving the vacuum to a different place.' },
            id4: { description: 'Wipe the cliff sensor clean and move the vacuum to a different place.' },
            id5: { description: 'Remove and clean the main brush.' },
            id6: { description: 'Remove and clean the sidebrushes.' },
            id7: { description: 'Make sure the wheels arent blocked. Move the vacuum to a different place and try again.' },
            id8: { description: 'Make sure there are no obstacles around the vacuum.' },
            id9: { description: 'Install the dustbin and the filter.' },
            id10: { description: 'Make sure the filter has been tried or clean the filter.' },
            id11: { description: 'Strong magnetic field detected. Move the device away from the virtual wall and try again' },
            id12: { description: 'Battery is low, charge your vacuum.' },
            id13: { description: 'Couldnt charge properly. Make sure the charging surfaces are clean.' },
            id14: { description: 'Battery malfunctioned.' },
            id15: { description: 'Wipe the wall sensor clean.' },
            id16: { description: 'Use the vacuum on a flat horizontal surface.' },
            id17: { description: 'Sidebrushes malfunctioned. Reboot the system.' },
            id18: { description: 'Fan malfunctioned. Reboot the system.' },
            id19: { description: 'The docking station is not connected to power.' },
            id20: { description: 'unkown' },
            id21: { description: 'Please make sure that the top cover of the laser distance sensor is not pinned.' },
            id22: { description: 'Please wipe the dock sensor.' },
            id23: { description: 'Make sure the signal emission area of dock is clean.' }
        };
    }
}

module.exports = XiaomiRoborockVacuum;