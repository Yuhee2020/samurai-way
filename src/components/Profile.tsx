import React from "react";
import s from "./Profile.module.css"

function Profile() {
    return <div className={s.content}>
        <div>
            <img width={1000}
                 src="https://media-exp1.licdn.com/dms/image/C4D1BAQGDmALg_8s-Yg/company-background_10000/0/1519799119530?e=2147483647&v=beta&t=MpzHeo7wdMoePy-CjWNPwwMbgDU3ydtdqIXGYFtSisg"/>
        </div>
        <div>
            ava+description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div className="item">
                    post1
                </div>
                <div className="item">
                    post2
                </div>
            </div>
        </div>
    </div>
}

export default Profile