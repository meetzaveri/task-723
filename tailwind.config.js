module.exports = {
    purge: ['./src/**/*.js'],
    future: {
        removeDeprecatedGapUtilities: true,
    },
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1348px',
            xxxl: '1548px',
            '4xl': '1700px',
            '5xl': '2000px',
            '6xl': '2200px',
        },

        // fontFamily: {
        //   display: ["Gilroy", "sans-serif"],
        //   body: ["Graphik", "sans-serif"],
        // },
        borderWidth: {
            default: '1px',
            0: '0',
            2: '2px',
            4: '4px',
        },
        borderRadius: {
            md: '0.3125rem',
            lg: '0.9375rem',
            none: '0',
            sm: '0.125rem',
            default: '0.25rem',
            default: '4px',
            full: '9999px',
            large: '12px',
        },
        extend: {
            colors: {
                primary: {
                    active: '#ff5a43',
                    focus: '#ff7160',
                },
                danger: {
                    active: '#FF5630',
                    focus: '#BF2600',
                    inactive: '#FFEBE6',
                },
                secondary: {
                    active: '#6B778C',
                    focus: '#A5ADBA',
                    inactive: '#DFE1E6',
                },
                info: {
                    active: '#6B778C',
                    focus: '#A5ADBA',
                    inactive: '#DFE1E6',
                },
                success: {
                    active: '#36B37E',
                    focus: '#006644',
                    inactive: '#E3FCEF',
                },
            },
            spacing: {
                72: '18rem',
                96: '24rem',
                128: '32rem',
                144: '40rem',
                160: '48rem',
            },
        },
    },
}
