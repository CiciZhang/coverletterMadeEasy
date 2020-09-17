import React from "react"

function header () {
    return (
        <header>
            <h1>Cover Letter made Easy</h1>
            <p>Tired of replacing addressee, company name, and job title manually? Try this app.</p>
            <div className="sample">
                <div className="steps">
                    <h2>How to Use</h2>
                    <p>The app is broken up into 2 parts. Replacements and Template. Please follow the steps below to see how the app works.</p>
                </div>
                <div className="steps">
                    <h3>Step 1: Submit your Template</h3>
                    <p>You can replace ANY word you want but for best results I recommend putting the fields you want to replace in a "container". This can be greater than and less than signs or square brackets.</p>
                    <p>Try it yourself! Copy the text below and paste it into template input.</p>
                    <p className="example">Hi [NAME], my name is Jessie I recently applied to be a [JOB] at [COMPANY].</p>
                </div>
                <div className="steps">
                    <h3>Step 2: Submit your Replacements</h3>
                    <p>You can input as many replacements as you'd like</p>
                    <p>In our example we have three. Please submit the following:</p>
                    <ul className="example">
                        <li>[NAME], Giovanni</li>
                        <li>[JOB], Grunt</li>
                        <li>[COMPANY], Team Rocket</li>
                    </ul>
                    <p>You know you've done it correctly when three bullet points show up</p>
                </div>
                <div className="steps">
                    <h3>Step 3: Update Text</h3>
                    <p>Assuming you've done everything correctly replacements will happen when you press "Update Text."</p>
                    <p>Note this app is case sensitive. Please make sure your inputs match up.</p>
                </div>
                
                {/* <h4>What do the other buttons do?</h4>
                <ul>
                    <li>Revert Text: Reverts your template back to its original input. Use this with "Clear Replacements" to start a new cover letter without having to re-enter the template</li>
                    <li>Clear Replacements: Clears the replacements</li>
                    <li>Clear All: Start anew</li>
                </ul> */}
            </div>
        </header>
    )
}

export default header