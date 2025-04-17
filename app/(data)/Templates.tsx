export default[
    {
        name:'Blog Title',
        desc:'An Ai tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 5 blog topic idea in bullet wise only based on given niche topic & outline give me result in Rich text editor format',
        slug:'generate-blog-title',
        form:[
            {
                label:'Enter Your Blog niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog outline ',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Blog Content',
        desc:'An Ai tool that generate blog title depends on your blog information',
        category:'Blog',
        icon:'https://cdn-icons-png.flaticon.com/128/9836/9836465.png',
        aiPrompt:'Give me 5 blog Content topic idea in bullet wise only based on given niche topic & outline give me result in Rich text editor format',
        slug:'generate-blog-content',
        form:[
            {
                label:'Enter Your Blog Content',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter blog Content outline ',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    {
        name:'Youtube Content ',
        desc:'An Ai tool that generate Youtube  title depends on your Youtube niche information',
        category:'Yotube',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me 10 youtube Video Content idea in bullet wise only based on given niche topic & outline give me result in Rich text editor format',
        slug:'generate-youtbe-content',
        form:[
            {
                label:'Enter Your Youtube niche',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter Youtube  outline ',
                field:'textarea',
                name:'outline',
            }
        ]
    },

    {
        name:'Learn Coding ',
        desc:'Learing a new Technology and new tech industries Platfrom',
        category:'Learing',
        icon:'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt:'Give me a Conding Language core and advanced topic i will giving to you in bullet wise only based on given niche topic & outline give me result in Rich text editor format',
        slug:'generate-learing-coding',
        form:[
            {
                label:'Enter Your Coding Language',
                field:'input',
                name:'niche',
                required:true
            },
            {
                label:'Enter Some topics ',
                field:'textarea',
                name:'outline',
            }
        ]
    },
    
]