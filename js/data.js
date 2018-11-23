var oTemplateResume = {
    el: '.wrapper',
    data: {
        name: {
            en: 'Lan Yang',
            zh: '杨澜'
        },

        email: 'aaa@a.com',
        phone: '12345678901',
        education: {
            title: {
                en: 'Education',
                zh: '教育'
            },
            items: [{
                degree: {
                    en: 'Bachelor in xxx',
                    zh: 'xxx学士'
                },
                meta: {
                    en: 'xxx University',
                    zh: 'xxx'
                },
                time: {
                    en: 'Sep 9999 - Jun 9999',
                    zh: '9999年9月- 9999年6月'
                }
            }]
        },
        languages: {
            title: {
                en: 'Languages',
                zh: '语言'
            },
            items: [{
                    name: {
                        en: 'Chinese',
                        zh: '中文'
                    },
                    desc: {
                        en: 'Native',
                        zh: '母语'
                    }
                },
                {
                    name: {
                        en: 'English',
                        zh: '英语'
                    },
                    desc: {
                        en: 'Professional',
                        zh: '熟练'
                    }
                }
            ]
        },
        skills: {
            title: {
                en: 'Skills',
                zh: '技术'
            },
            items: [{
                    name: {
                        en: 'AAA',
                        zh: 'AAA'
                    },
                    desc: {
                        en: '',
                        zh: ''
                    }
                },
                {
                    name: {
                        en: 'BBB',
                        zh: 'BBB'
                    },
                    desc: {
                        en: '',
                        zh: ''
                    }
                },
                {
                    name: {
                        en: 'CCC',
                        zh: 'CCC'
                    },
                    desc: {
                        en: '',
                        zh: ''
                    }
                },
                {
                    name: {
                        en: 'DDD',
                        zh: 'DDD'
                    },
                    desc: {
                        en: '',
                        zh: ''
                    }
                }
            ]
        },
        experience: {
            title: {
                en: 'Experience',
                zh: '工作研究经历'
            },
            items: [{
                    job: {
                        en: 'xxx',
                        zh: 'xxx'
                    },
                    time: {
                        en: 'Xxx 9999 - Present',
                        zh: '9999年x月 - 现在'
                    },
                    company: {
                        en: 'xxx 公司',
                        zh: 'xxx Company'
                    },
                    detail: {
                        p: {
                            en: '',
                            zh: ''
                        },
                        bulletpoints: [{
                                en: 'When a carcass is butchered, it is divided into many sections',
                                zh: 'When a carcass is butchered, it is divided into many sections'
                            },
                            {
                                en: 'Butchers frequently refer to the section of meat below the rib cage, but above the round ',
                                zh: 'Butchers frequently refer to the section of meat below the rib cage, but above the round '
                            },
                            {
                                en: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as',
                                zh: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as'
                            },
                            {
                                en: 'In the British butchery tradition, the same set of muscles ',
                                zh: 'In the British butchery tradition, the same set of muscles '
                            }

                        ]

                    }
                },
                {
                    job: {
                        en: 'xxx',
                        zh: 'xxx'
                    },
                    time: {
                        en: 'Xxx 9999 - Present',
                        zh: '9999年x月 - 现在'
                    },
                    company: {
                        en: 'xxx 公司',
                        zh: 'xxx Company'
                    },
                    detail: {
                        p: {
                            en: '',
                            zh: ''
                        },
                        bulletpoints: [{
                                en: 'When a carcass is butchered, it is divided into many sections',
                                zh: 'When a carcass is butchered, it is divided into many sections'
                            },
                            {
                                en: 'Butchers frequently refer to the section of meat below the rib cage, but above the round ',
                                zh: 'Butchers frequently refer to the section of meat below the rib cage, but above the round '
                            },
                            {
                                en: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as',
                                zh: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as'
                            },
                            {
                                en: 'In the British butchery tradition, the same set of muscles ',
                                zh: 'In the British butchery tradition, the same set of muscles '
                            }

                        ]

                    }
                },
                {
                    job: {
                        en: 'xxx',
                        zh: 'xxx'
                    },
                    time: {
                        en: 'Xxx 9999 - Present',
                        zh: '9999年x月 - 现在'
                    },
                    company: {
                        en: 'xxx 公司',
                        zh: 'xxx Company'
                    },
                    detail: {
                        p: {
                            en: '',
                            zh: ''
                        },
                        bulletpoints: [{
                                en: 'When a carcass is butchered, it is divided into many sections',
                                zh: 'When a carcass is butchered, it is divided into many sections'
                            },
                            {
                                en: 'Butchers frequently refer to the section of meat below the rib cage, but above the round ',
                                zh: 'Butchers frequently refer to the section of meat below the rib cage, but above the round '
                            },
                            {
                                en: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as',
                                zh: 'butchered from the loin section of cattle and pork[19] contain the name "loin" such as'
                            },
                            {
                                en: 'In the British butchery tradition, the same set of muscles ',
                                zh: 'In the British butchery tradition, the same set of muscles '
                            }

                        ]

                    }
                }

            ]
        },
        projects: {
            title: {
                en: 'Projects',
                zh: '项目'
            },
            items: [{
                    name: {
                        en: 'Xxx',
                        zh: 'XXX'
                    },
                    desc: {
                        en: 'Butchers frequently refer to the section of meat below the rib cage, but above the round (in a carcass hanging from the head end) as loin. Various names of meats further butchered from the loin section of cattle and pork[19] contain the name "loin" such as tenderloin and sirloin. In American culinary arts the loin section of meat from the top half of cattle is divided into three sections.[20] The various cuts of beef from this section are named sirloin, tenderloin, top sirloin, and short loin. They are named for their respective parts on the cattle.',
                        zh: 'The loin section of meat from the top half of cattle is divided into three sections.[20] The various cuts of beef from this section are named sirloin, tenderloin'
                    }
                },
                {
                    name: {
                        en: 'XXX',
                        zh: 'xxx'
                    },
                    desc: {
                        en: 'The loin section of meat from the top half of cattle is divided into three sections.[20] The various cuts of beef from this section are named sirloin, tenderloin',
                        zh: 'The loin section of meat from the top half of cattle is divided into three sections.[20] The various cuts of beef from this section are named sirloin, tenderloin'
                    }
                },
            ]
        }

    }
};