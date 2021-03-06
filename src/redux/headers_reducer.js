const RELOAD = 'RELOAD';
const START_SEARCH = 'START_SEARCH';

let store = {
    _state: {
        headers:{
            slidingMenu:[
                {name:'category',content: ['Pocket Watches','Watches'],
                    count:['(36)','(1632)']},
                {name:'gender',content: ["Men's",'Ladies','Unisex'],
                    count:['(1028)','(583)','(57)']},
                {name:'color'},
                {name:'case size',content: ['<20 mm','20-25 mm','25-30 mm',
                        '30-35 mm','35-40 mm','40-45 mm','45-50 mm','50-55 mm','>55 mm'],
                    count:['(14)','(63)','(179)','(242)','(319)','(648)','(185)','(9)','(2)']},
                {name:'case shape',content: ['Cushion','Dodecagon','Oval','Rectangle','Round','Square','Tonneau','Unique'],
                    count:['(5)','(9)','(20)','(78)','(1485)','(39)','(18)','(9)']},
                {name:'style',content: ['Casual Watches','Dive Watches','Dress Watches','Fashion Watches',
                        'Luxury Watches','Military Watches','Sport Watches','Travel Watches'],
                    count:['(919)','(15)','(342)','(5)','(39)','(20)','(311)','(5)']},
                {name:'movement',content: ['Automatic','Auto-Quartz','Hand Wind','Quartz'],
                    count:['(554)','(3)','(21)','(1090)']},
                {name:'features',content: ['Alarm','Altimeter','Calendar',
                        'Ceramic','Chronograph','Chronometer','Compass','Diamond'],
                    count:['(104)','(35)','(1303)','(34)','(567)','(16)','(103)','(119)']},
                {name:'price',content: ['$0.00 - $179.99','$180.00 - $249.99',
                        '$250.00 - $349.99','$350.00 - $479.99','$480.00 and above'],
                    count:['(332)','(323)','(383)','(286)','(344)']},
                {name:'dial type',content: ['Analog','Analog-Digital'],
                    count:['(1560)','(108)']},
                {name:'band type',content: ['Bracelet','Strap'],
                    count:['(784)','(852)']}
            ],
            shopInfo:{
                searchWord:''}
        }
    },
    getState () {
        return this._state;
    },
    _rerenderTree () {
        console.log('State is updated')
    },
    subscribe (observer) {
        this._rerenderTree = observer;
    },
    _startSearch (letters) {
        this._state.headers.shopInfo.searchWord = letters;
        this._rerenderTree(this.getState())
    },
    dispatch (action) { // type + data
        switch (action.type) {
            case RELOAD:
                this._rerenderTree(this.getState());
                break;
            case START_SEARCH:
                action.message
                    ? this._startSearch(action.message)
                    : this._startSearch("");
                break;
            default:
                console.error();
                break
        }
    }
};

export const reloadAction = () => ({type:RELOAD});

export const startSearchAction = (text) => {
    return {type:START_SEARCH,
            message:text}
}

export default store;