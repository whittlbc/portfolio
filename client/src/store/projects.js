export default {
    
    projects:[
        {
            name:'Data Visualization',
            displayType:'image',
            desc:`
            Through visualization, we can understand huge data sets with our ability to recognize patterns and relationships.<br>
            If presented poorly, data can be hard for humans to parse, or worse, boring!<br>
            If presented correctly, data can be intuitive, not to mention beautiful.
            <br><br>
            Ever since I discovered D3.js, data visualization has become one of my favorite coding pastimes. 
            `,
            slides:[
                    {
                        img:'d3showreel.jpg',
                        label: { 
                            title:'D3 Showreel', 	
                            desc:`
                            Behold the power of D3!
                            <br><br>
                            Live demo <a target="_blank" href="https://bl.ocks.org/guanzo/cda716d75831841ed00a09e6630d26a6">here</a>
                            <br><br>
                            <a href="https://github.com/guanzo/d3-show-reel" target="_blank">Github</a>
                            ` 
                        }
                    },
                    {
                        img:'streamgraphmaker.jpg',
                        label: { 
                            title:'Stream graphs', 	
                            desc:`
                            Stream graphs are my favorite visualization, so I made a simple tool to create them.
                            <br><br>
                            <a style="text-decoration:underline;" target="_blank" href="https://streamgraphmaker.guanzo.io/">Website link</a>
                            `
                        }
                    },
                ],
        },
        {
            name:'Vote to Play',
            tag:'Twitch.tv Extension',
            startDate: 'September 2017',
            displayType:'video',
            desc:`This app allows viewers to vote on characters they want the streamer to play. The difference between this
            and other polling apps: Vote to Play is prepopulated with data, so the streamer doesn't have to set up any polls.
            <br><br>
            I put a lot of focus into creating a smooth UI, in order to enhance the stream experience.
            <br><br>
            Supports: Dota 2, League of Legends, Heroes of the Storm, Battlerite, Hearthstone, and Overwatch. As well as All Games voting.
            <br><br>
            <a href="https://github.com/guanzo/vote-to-play" target="_blank">Github</a>`,
            slides:[
                    {
                        video:'https://www.youtube.com/embed/UFUjYxOvr9U',
                        label: { 
                            title:'Viewer', 	
                            desc:'As the viewer, vote for a hero that you want to learn, or a troll hero. The streamer is at your mercy!' 
                        }
                    },
                    {
                        video:'https://www.youtube.com/embed/ygSj0FGp6A4',
                        label: { 
                            title:'Live Config', 	
                            desc:'As the streamer, configure vote settings, and monitor the current vote' 
                        }
                    },
                    {
                        video:'https://www.youtube.com/embed/gvp-Fb4zFco',
                        label: { 
                            title:'Config', 	
                            desc:'As the streamer, create voting whitelists to limit the pool of voteable candidates' 
                        }
                    },
                ],
        },
        {
            name:'Boss',
            tag:'Predictive Analytics',
            startDate: 'April 2017',
            displayType:'image',
            desc:`A tool that attempts to predict aircraft acquisitions and         retirements based on historical economic conditions. As Aviall is an aviation products distributor, knowing when a customer might make changes to their fleet can give Aviall the competitive edge.
            <br><br>
            My first project with Vue. I fell in love.
            Guanzo Manor was built with Vue!
            <br><br>
            <small>Private project for Aviall</small>
            `,
            slides:[
                    {
                        img:'boss_customergrid.png',
                    },
                    {
                        img:'boss_customerprofile.png',
                        label: { 
                            title:'The Economic Landscape', 	
                            desc:'GDP, fuel price, yearly income, public relations, and much more. Many parameters influence a customers behavior' 
                        }
                    },
                    {
                        img:'boss_scenario.png',
                        label: { 
                            title:'Learning from the Past', 	
                            desc:'Predicting aircraft retirements by modeling historic values' 
                        }
                    },
                    {
                        img:'boss_fleetgrid.png',
                    },
                    {
                        img:'boss_fleetstrategy.png',
                        label: { 
                            title:'Retirements & Acquisitions', 	
                            desc:"Some aircraft parts can take years to manufacturer, so knowing how a customer's fleet will change is vital to the business." 
                        }
                    },
                    {
                        img:'boss_partsplanning.png',
                    },
                ],
        },
        {
            name:'New Business Generator',
            tag:'Business Intelligence',
            startDate: 'March 2016',
            displayType:'image',
            desc:`The NBG provides a high level overview of the state of Aviall's business. It analyzes millions of invoices, aviation products, customer fleets, and other data points to infer sales opportunities for Aviall. Users are given a sensible starting point for their sales strategies.
            <br><br>
            This was my first full fledged SPA, and I created it from the ground up. Many mistakes were made, and many more lessons were learned. Writing this application taught me a lot about web development.
            <br><br>
            <small>Private project for Aviall</small>`,
            slides:[
                    {
                        img:['nbg_region.png','nbg_choropleth.png'],
                        label: { 
                            title:'Around the World', 	
                            desc:'A global company must maintain a high level view of their position. ' 
                        }
                    },
                    {
                        img:'nbg_customer.png',
                        label: { 
                            title:'Customer Profile', 	
                            desc:`The classic customer profile page. Supplemented by a beautiful streamgraph to visualize the aggregate sales over time.` 
                        }
                    },
                    {
                        img:'nbg_platform.png',
                        label: { 
                            title:'Slice and Dice', 	
                            desc:`Sales for an aircraft platform presented through different levels of aggregation.` 
                        }
                    },
                ],
        },
        {
            name:'Relevance Engine',
            tag:'News Aggregator',
            startDate: 'May 2015',
            displayType:'image',
            desc:`Relevant aviation industry news is collected and displayed in real time. The Relevance Engine continues to improve the sales and cost savings of Aviall. 
            <br><br>
            <small>Private project for Aviall</small>`,
            slides:[
                    {
                        img:'re_dashboard.png',
                        label: { 
                            title:'The Dashboard', 	
                            desc:'Create a customized news dashboard from a variety of sources.' 
                        }
                    },
                    {
                        img:'re_docspace.png',
                        label: { 
                            title:'Document Space', 	
                            desc:`Visualize the industry conversation through a self organizing map.` 
                        }
                    },
                    {
                        img:'re_cdd.png',
                        label: { 
                            title:'Concept Deep Dive', 	
                            desc:`News articles are reduced to core words that define the content. 
                                Dive deep into a concept through a directed graph.` 
                        }
                    },
                    {
                        img:'re_email.png',
                        label: { 
                            title:'Email Blast', 	
                            desc:`Subscribers to the automated email system stay up to date on the latest industry news.` 
                        }
                    }
                ],
        }
    ],
}