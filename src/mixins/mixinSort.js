export default {
    data() {
        return {
            needs: null,
        }
    },

    methods: {

        sortReverseNeeds(call) {
            return this.needs = call().reverse();
        },

        sortHospital() {
            return this.needs = this.needs.sort((prev, next) => {
                if ( prev.hospital_name < next.hospital_name ) return -1;
                if ( prev.hospital_name < next.hospital_name ) return 1;
            });
        },

        sortName() {
            return this.needs = this.needs.sort((prev, next) => {
                if ( prev.medication_name < next.medication_name ) return -1;
                if ( prev.medication_name < next.medication_name ) return 1;
            });
        },

        sortCountry() {
            return this.needs = this.needs.sort((prev, next) => {
                if ( prev.vendor_country < next.vendor_country ) return -1;
                if ( prev.vendor_country < next.vendor_country ) return 1;
            });
        },

        sortVendor() {
            return this.needs = this.needs.sort((prev, next) => {
                if (prev.vendor_name < next.vendor_name) return -1;
                if (prev.vendor_name < next.vendor_name) return 1;
            });
        },

        sortType() {
            return this.needs = this.needs.sort((prev, next) => {
                if ( prev.type_drug_name < next.type_drug_name ) return -1;
                if ( prev.type_drug_name < next.type_drug_name ) return 1;
            });
        },

    },

}