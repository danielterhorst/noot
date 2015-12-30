'use strict';


export default {

    init: function () {
        localStorage.clear();
        localStorage.setItem('power', JSON.stringify([
            {
                kwh: Math.floor((Math.random() * 1000) + 1)
            }
        ]));
    }

};
