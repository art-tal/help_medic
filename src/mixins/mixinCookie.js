export default {
    data(){
        return {

        }
    },

    methods: {

        getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        setCookie(cname, cvalue, exdays) {
            let d = new Date();
            d.setDate(d.getDate() + exdays);
            cvalue = encodeURIComponent(cvalue);
            document.cookie = cname + "=" + cvalue + ";path=/;" +" expires=" + d.toUTCString();
        },

        delCookie(cname) {
            this.setCookie(cname, "", -1);
        }

    },
}