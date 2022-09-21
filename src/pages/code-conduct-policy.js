import React from 'react';

const Policy = () => (

    <div className='w-3/4 mx-auto my-10'>
        <h1 className='text-center'>Code of Conduct and Anti-Harassment Policy</h1>
        <p>Google Developer Groups ("GDG") {process.env.REACT_APP_CHAPTER_NAME} is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We do not tolerate harassment of event participants in any form. GDG {process.env.REACT_APP_CHAPTER_NAME} takes violations of our policy seriously and will respond appropriately.
        <br />
        <br />
        All participants of GDG {process.env.REACT_APP_CHAPTER_NAME} events must abide by the following policy:</p>
        <h2>Be Excellent To Each Other</h2>
        <p>We want the event to be an excellent experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. Treat everyone with respect. Participate while acknowledging that everyone deserves to be here -- and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions. Jokes shouldn’t demean others. Consider what you are saying and how it would feel if it were said to or about you.</p>
        <h2>Speak Up If You See Or Hear Something</h2>
        <p>Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. The person making you feel uncomfortable may not be aware of what they are doing, and politely bringing their behavior to their attention is encouraged. If a participant engages in harassing or uncomfortable behavior, the event organizers may take any action they deem appropriate, including warning or expelling the offender from the event with no refund. If you are being harassed or feel uncomfortable, notice that someone else is being harassed, or have any other concerns, please contact a member of the event staff immediately.</p>
        <h2>Zero Tolerance Policy</h2>
        <p>Harassment is not tolerated. We have a zero tolerance policy for in-person or online harassment of any kind, including but not limited to:</p>
            <ul className='list-disc list-inside pl-5'>
                <li>Deliberate intimidation</li>
                <li>Harassing photography or recording</li>
                <li>Sustained disruption of talks or other events</li>
                <li>Offensive verbal language</li>
                <li>Verbal language that reinforces social structures of domination</li>
                <li>Sexual imagery and language</li>
                <li>Unwelcome sexual or physical attention</li>
                <li>Physical or cyber threats</li>
            </ul>
        <p>We are dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. We do not tolerate harassment of event participants in any form. We take violations of our policy seriously and will respond appropriately.</p>
        
        <p> All participants of GDG {process.env.REACT_APP_CHAPTER_NAME} events, including in-person and online attendees, event staff, speakers, and Googlers, must abide by this policy. Zero tolerance policy applies to harassment of any kind, in relation to, but not limited to:</p>
        <ul className='list-disc list-inside pl-5'>
            <li>Neurodiversity</li>
            <li>Race</li>
            <li>Color</li>
            <li>National origin</li>
            <li>Gender identity</li>
            <li>Gender expression</li>
            <li>Sexual orientation</li>
            <li>Age</li>
            <li>Body size</li>
            <li>Disabilities</li>
            <li>Appearance</li>
            <li>Religion</li>
            <li>Pregnancy</li>
            <li>Military status</li>
            <li>Social demographic</li>
        </ul>
    
        <p>Participants asked to stop any harassing behavior are expected to comply immediately. This policy extends to talks, forums, workshops, codelabs, social media, parties, hallway conversations, all attendees, partners, sponsors, volunteers, event staff, etc. You catch our drift. GDG {process.env.REACT_APP_CHAPTER_NAME} reserves the right to refuse admittance to, or remove any person from, any GDG {process.env.REACT_APP_CHAPTER_NAME}  hosted event (including future GDG {process.env.REACT_APP_CHAPTER_NAME} events) at any time in its sole discretion. This includes, but is not limited to, attendees behaving in a disorderly manner or failing to comply with this policy, and the terms and conditions herein. If a participant engages in harassing or uncomfortable behavior, the event organizers may take any action they deem appropriate, including warning or expelling the offender from the event with no refund.
        </p>
        <p>Our event staff can usually be identified by special badges/attire. Our zero tolerance policy means that we will look into and review every allegation of violation of our Event Community Guidelines and Anti-Harassment Policy and respond appropriately. Please note, while we take all concerns raised seriously, we will use our discretion as to determining when and how to follow up on reported incidents, and may decline to take any further action and/or may direct the participant to other resources for resolution.
        </p>
        <p>Event staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing discomfort or harassment to feel safe for the duration of the event. We value your attendance.
        </p>
        <p>Exhibiting partners, sponsors or vendor booths, or similar activities are also subject to this policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment. Participants and exhibiting partners or sponsors disobeying this policy will be notified and are expected to stop any offending behavior immediately.
        </p>
        <h2>Reporting</h2>
        <p>If someone makes you or anyone else feel unsafe or unwelcome, please report it as soon as possible. Harassment and other code of conduct violations reduce the value of our event for everyone. We want you to be happy at our event. People like you make our event a better place.</p>
        <p>You can make a report either personally to <a href={'mailto:' + process.env.REACT_APP_DEVFEST_EMAIL} className='font-semibold hover:text-Blue500'>{process.env.REACT_APP_DEVFEST_EMAIL}</a> or anonymously on <a href={process.env.REACT_APP_COC_REPORT_FORM} className='font-semibold hover:text-Blue500'>our form</a>. We can't follow up on an anonymous report with you directly, but we will fully investigate it and take whatever action is necessary to prevent a recurrence.</p>
        <h2>Why This Policy Is Important</h2>
        <p>Harassment at events and in online communities is unfortunately common. Creating an official policy aims to improve this by making it clear that harassment of anyone for any reason is not acceptable within our events and communities. This policy may prevent harassment by clearly defining expectations for behavior, aims to provide reassurance, and encourages people who have had bad experiences at other events to participate in this one.</p>
        <h2>License and Attribution</h2>
        <p>This policy is licensed under the Creative Commons Zero license. This policy is based on and influenced by several other community policies including: Ohio LinuxFest Anti-Harassment policy, Con Anti-Harassment Project, Geek Feminism Wiki (created by the Ada Initiative), ConfCodeofConduct.com, JSconf, Rust, Diversity in Python, and Write/Speak/Code.</p>
    </div>
)

export default Policy;