import React from 'react'
import styles from '../login/Login.module.css'
import { useState } from 'react'


export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // displayName은 파이어베이스에서 유저 정보에 저장 할 수 있는 속성중 하나입니다. 
    // 때문에 다른 변수명을 사용하지 말아주세요. ( 참고 : https://firebase.google.com/docs/reference/js/auth.md#updateprofile)
    const [displayName, setDisplayName] = useState('');

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, displayName);
    }


    return (
        <>
            <main>
                <h2 className={styles["img-title"]}>

                <svg className="svg" width="156" height="75" viewBox="0 0 156 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_73192_4246)">
                            <path
                                d="M131.504 48.336C131.589 48.144 131.781 48.048 132.08 48.048C132.421 48.048 132.624 48.144 132.688 48.336C132.773 48.528 132.891 51.3654 133.04 56.848C133.125 60.176 133.157 62.3947 133.136 63.504C133.136 64.6134 133.072 65.232 132.944 65.36C132.709 65.5947 132.475 65.6587 132.24 65.552C132.155 65.5307 132.091 65.424 132.048 65.232C132.005 65.04 131.963 64.656 131.92 64.08C131.877 63.504 131.845 62.7894 131.824 61.936C131.803 61.0614 131.771 59.856 131.728 58.32C131.6 53.2214 131.525 50.4267 131.504 49.936C131.44 49.0614 131.44 48.528 131.504 48.336ZM120.912 53.872C122.427 53.1467 123.429 52.816 123.92 52.88L124.656 52.944L124.624 55.568C124.581 56.848 124.475 58.2774 124.304 59.856C124.155 61.4347 124.016 62.4587 123.888 62.928C123.803 63.1627 123.6 63.312 123.28 63.376C122.981 63.4187 122.779 63.344 122.672 63.152C122.544 62.96 122.619 62.3307 122.896 61.264C123.088 60.4534 123.227 59.1947 123.312 57.488C123.419 55.7814 123.397 54.8427 123.248 54.672C123.099 54.544 122.501 54.6827 121.456 55.088C120.475 55.408 119.803 55.5894 119.44 55.632C119.077 55.6534 118.864 55.5467 118.8 55.312C118.779 55.1627 118.928 54.9814 119.248 54.768C119.589 54.5334 120.144 54.2347 120.912 53.872Z"
                                fill="#29363D" />
                            <path
                                d="M99.0638 46.704C99.0851 45.8933 99.1171 45.4133 99.1598 45.264C99.2238 45.1147 99.3945 45.0613 99.6718 45.104C99.8425 45.1253 99.9598 45.1787 100.024 45.264C100.109 45.328 100.162 45.4667 100.184 45.68C100.205 45.8933 100.226 46.2667 100.248 46.8C100.248 48.08 100.29 49.7973 100.376 51.952C100.418 53.6587 100.418 54.672 100.376 54.992C100.333 55.312 100.194 55.4933 99.9598 55.536C99.5971 55.5787 99.3625 55.472 99.2558 55.216C99.1065 54.832 99.0425 51.9947 99.0638 46.704ZM89.0158 48.976C89.5065 48.528 89.8585 48.2613 90.0718 48.176C90.3065 48.0693 90.6905 48.048 91.2238 48.112C91.9278 48.176 92.4931 48.3573 92.9198 48.656C93.3251 48.912 93.5811 49.4027 93.6878 50.128C93.8158 50.832 93.7411 51.504 93.4638 52.144C93.2718 52.6133 92.9411 53.0293 92.4718 53.392C92.0238 53.7333 91.5331 53.9787 90.9998 54.128C90.4665 54.2773 89.9331 54.32 89.3998 54.256C88.8878 54.1707 88.4718 53.968 88.1518 53.648C87.9811 53.4773 87.8745 53.264 87.8318 53.008C87.7891 52.7307 87.7891 52.272 87.8318 51.632C87.8745 50.864 87.9491 50.352 88.0558 50.096C88.1838 49.8187 88.5038 49.4453 89.0158 48.976ZM92.2798 49.616C91.6185 49.0827 90.8931 49.0613 90.1038 49.552C89.7838 49.744 89.5598 49.9573 89.4318 50.192C89.3038 50.4053 89.2078 50.736 89.1438 51.184C89.1011 51.5253 89.0798 51.8133 89.0798 52.048C89.1011 52.2827 89.1545 52.4747 89.2398 52.624C89.3465 52.7733 89.4745 52.8907 89.6238 52.976C89.7945 53.04 90.0078 53.072 90.2638 53.072C90.7758 53.072 91.2451 52.8693 91.6718 52.464C92.1198 52.0373 92.3865 51.536 92.4718 50.96C92.5571 50.2773 92.4931 49.8293 92.2798 49.616ZM95.6718 58.128C96.7385 57.9787 97.3678 58.0107 97.5598 58.224C97.7518 58.416 97.8478 59.184 97.8478 60.528V62.896L97.0158 63.248C96.4611 63.4613 95.8531 63.632 95.1918 63.76C94.1038 63.9307 93.3465 64.176 92.9198 64.496C92.5145 64.816 92.3118 65.3067 92.3118 65.968C92.3118 66.5227 92.4931 66.8533 92.8558 66.96C93.2398 67.088 94.0398 67.0773 95.2558 66.928C96.7491 66.7573 97.6238 66.6187 97.8798 66.512C98.1571 66.4053 98.3491 66.512 98.4558 66.832C98.6051 67.344 98.5305 67.6853 98.2318 67.856C97.9545 68.0267 97.2078 68.144 95.9918 68.208C94.5411 68.3147 93.4745 68.4213 92.7918 68.528C92.1518 68.6347 91.6931 68.528 91.4158 68.208C91.1598 67.9093 91.0318 67.3227 91.0318 66.448C91.0318 65.5307 91.0958 64.8693 91.2238 64.464C91.2878 64.208 91.6185 63.92 92.2158 63.6C92.8131 63.2587 93.5171 62.9813 94.3278 62.768C95.2878 62.4693 95.8531 62.2347 96.0238 62.064C96.2158 61.872 96.3118 61.4133 96.3118 60.688C96.3118 59.792 96.2585 59.344 96.1518 59.344C95.9598 59.344 95.5545 59.3973 94.9358 59.504C94.3171 59.6107 93.6771 59.7387 93.0158 59.888C92.3758 60.0373 91.9065 60.1547 91.6078 60.24C90.8611 60.496 90.4131 60.5707 90.2638 60.464C90.2211 60.4427 90.1785 60.3893 90.1358 60.304C90.0931 60.2187 90.0611 60.1227 90.0398 60.016C90.0398 59.9093 90.0398 59.8133 90.0398 59.728C90.0398 59.6213 90.0505 59.536 90.0718 59.472C90.0931 59.3867 90.1251 59.344 90.1678 59.344C90.1891 59.344 90.9251 59.1733 92.3758 58.832C93.8051 58.448 94.9038 58.2133 95.6718 58.128Z"
                                fill="#29363D" />
                            <path
                                d="M67.776 47.216C67.776 46.832 67.7866 46.544 67.808 46.352C67.8293 46.16 67.872 46.0213 67.936 45.936C68 45.8293 68.0746 45.7867 68.16 45.808C68.2453 45.8293 68.3733 45.8933 68.544 46C68.7573 46.1707 68.9386 47.7813 69.088 50.832C69.2586 53.8613 69.2373 55.4827 69.024 55.696C68.9386 55.7813 68.8426 55.824 68.736 55.824C68.6506 55.824 68.5546 55.792 68.448 55.728C68.3626 55.664 68.2773 55.5787 68.192 55.472C68.1066 55.344 68.032 55.2053 67.968 55.056C67.9253 54.8853 67.904 54.7147 67.904 54.544C67.904 54.1387 67.872 53.0187 67.808 51.184C67.7653 49.1787 67.7546 47.856 67.776 47.216ZM57.024 55.216C56.832 55.088 56.7573 53.9787 56.8 51.888C56.864 49.7973 56.992 48.688 57.184 48.56C57.3973 48.432 58.4106 48.3573 60.224 48.336C62.0586 48.2933 63.008 48.336 63.072 48.464C63.1573 48.6133 63.1466 49.7547 63.04 51.888C62.9333 54 62.8266 55.0987 62.72 55.184C62.6133 55.312 61.6746 55.3867 59.904 55.408C58.1546 55.408 57.1946 55.344 57.024 55.216ZM60.064 49.552C58.8906 49.552 58.2613 49.6053 58.176 49.712C58.048 49.8187 57.984 50.4907 57.984 51.728C57.984 52.496 58.016 53.008 58.08 53.264C58.144 53.52 58.272 53.7013 58.464 53.808C58.8053 54 59.3386 54.096 60.064 54.096C60.8106 54.0747 61.28 53.968 61.472 53.776C61.664 53.584 61.76 52.8373 61.76 51.536V49.552H60.064ZM64.16 58.768C64.5653 58.64 64.8746 58.5547 65.088 58.512C65.3013 58.448 65.5146 58.4053 65.728 58.384C65.9413 58.3627 66.0906 58.3733 66.176 58.416C66.2826 58.4373 66.368 58.5227 66.432 58.672C66.5173 58.8 66.5706 58.9387 66.592 59.088C66.6133 59.2373 66.6453 59.472 66.688 59.792C66.7733 60.688 66.8586 61.4347 66.944 62.032C67.0293 62.5653 66.88 62.96 66.496 63.216C66.1333 63.4507 65.3226 63.7173 64.064 64.016C62.8693 64.2933 62.1866 64.5813 62.016 64.88C61.824 65.2213 61.7386 65.5947 61.76 66C61.8026 66.4267 61.9306 66.6933 62.144 66.8C62.336 66.928 63.0186 66.9493 64.192 66.864C65.3653 66.8 66.2613 66.6827 66.88 66.512C67.2213 66.4267 67.4133 66.416 67.456 66.48C67.52 66.544 67.5413 66.768 67.52 67.152L67.424 68.016L64.768 68.176C62.9546 68.304 61.92 68.4107 61.664 68.496C61.3866 68.56 61.1626 68.5387 60.992 68.432C60.8213 68.3253 60.6933 68.112 60.608 67.792C60.544 67.4933 60.512 67.0453 60.512 66.448C60.512 65.36 60.5973 64.6773 60.768 64.4C60.896 64.144 61.216 63.8773 61.728 63.6C62.24 63.3013 62.6346 63.152 62.912 63.152C63.168 63.152 63.6266 63.0027 64.288 62.704C64.7573 62.512 65.0346 62.352 65.12 62.224C65.2266 62.0747 65.28 61.7333 65.28 61.2C65.28 60.4533 65.1733 60.048 64.96 59.984C64.7466 59.8773 63.9893 60.0373 62.688 60.464C61.152 60.9547 60.2986 61.136 60.128 61.008C60.064 60.944 60.032 60.816 60.032 60.624C60.032 60.3893 60.3093 60.1547 60.864 59.92C61.4186 59.664 62.5173 59.28 64.16 58.768Z"
                                fill="#29363D" />
                            <path
                                d="M37.128 49.104C37.4053 49.1253 37.576 49.264 37.64 49.52C37.704 49.7547 37.7787 50.4373 37.864 51.568C37.9707 53.2107 38.0347 55.888 38.056 59.6C38.0773 63.2907 38.0453 65.2107 37.96 65.36C37.896 65.4667 37.768 65.5413 37.576 65.584C37.4053 65.6267 37.2347 65.6373 37.064 65.616C36.8933 65.5947 36.808 65.5307 36.808 65.424C36.808 64.8693 36.776 62.1173 36.712 57.168L36.552 49.008L37.128 49.104ZM25.864 54.512C25.7573 52.9973 25.768 52.1973 25.896 52.112C25.9387 52.0907 26.024 52.0907 26.152 52.112C26.344 52.1333 26.4827 52.272 26.568 52.528C26.6747 52.784 26.7707 53.2853 26.856 54.032L27.112 55.856L28.008 55.696C28.1147 55.6747 28.264 55.6533 28.456 55.632C29.3733 55.4827 29.9067 55.344 30.056 55.216C30.2053 55.088 30.2907 54.704 30.312 54.064C30.3333 54.0213 30.344 53.9893 30.344 53.968C30.344 53.9253 30.344 53.8933 30.344 53.872C30.344 53.8293 30.344 53.7867 30.344 53.744C30.3867 53.0613 30.4293 52.6347 30.472 52.464C30.536 52.2933 30.6853 52.208 30.92 52.208C31.1547 52.208 31.2933 52.4107 31.336 52.816C31.4 53.2213 31.4533 54.448 31.496 56.496C31.5173 58.4373 31.5067 59.6533 31.464 60.144C31.4213 60.6347 31.304 60.976 31.112 61.168C30.856 61.3813 30.184 61.5413 29.096 61.648C28.0293 61.7547 27.272 61.7333 26.824 61.584C26.568 61.4773 26.3973 61.168 26.312 60.656C26.248 60.1227 26.1093 58.3093 25.896 55.216C25.8747 54.896 25.864 54.6613 25.864 54.512ZM29.48 56.88C28.904 56.88 28.488 56.9333 28.232 57.04C27.976 57.1253 27.7947 57.296 27.688 57.552C27.5813 57.7867 27.528 58.1707 27.528 58.704C27.528 59.4293 27.624 59.888 27.816 60.08C28.0293 60.272 28.5307 60.368 29.32 60.368C29.7253 60.368 29.9813 60.2293 30.088 59.952C30.216 59.6747 30.28 59.088 30.28 58.192V56.848L29.48 56.88Z"
                                fill="#29363D" />
                            <path
                                d="M138.568 10.28C140.21 9.98134 141.256 9.84268 141.704 9.86401L142.344 9.92801V12.936C142.344 13.7253 142.322 14.3547 142.28 14.824C142.258 15.2933 142.205 15.6773 142.12 15.976C142.056 16.2747 141.96 16.456 141.832 16.52C141.704 16.5627 141.533 16.552 141.32 16.488C141.149 16.424 141.042 16.2533 141 15.976C140.978 15.6773 141 15.0053 141.064 13.96C141.128 12.8933 141.138 12.2107 141.096 11.912C141.074 11.6133 140.978 11.432 140.808 11.368C140.466 11.2613 139.528 11.3573 137.992 11.656C137.01 11.8053 136.349 11.8907 136.008 11.912C135.688 11.912 135.474 11.8587 135.368 11.752C135.154 11.3893 135.197 11.1333 135.496 10.984C135.858 10.8133 136.882 10.5787 138.568 10.28ZM143.944 18.696C144.136 18.504 144.381 18.4933 144.68 18.664C144.978 18.8133 145.149 19.0587 145.192 19.4C145.192 19.4213 145.192 19.4427 145.192 19.464C145.234 19.848 145.064 20.0827 144.68 20.168C144.296 20.2533 142.92 20.392 140.552 20.584C140.232 20.6053 139.986 20.616 139.816 20.616C136.85 20.8507 135.101 20.968 134.568 20.968C134.056 20.9467 133.8 20.7867 133.8 20.488C133.8 20.1893 134.088 19.976 134.664 19.848C135.24 19.72 136.498 19.592 138.44 19.464C139.805 19.3787 141.032 19.2613 142.12 19.112C143.229 18.9413 143.837 18.8027 143.944 18.696ZM136.296 24.104C136.424 23.8907 136.616 23.912 136.872 24.168C137.149 24.4667 137.277 25.096 137.256 26.056C137.256 26.12 137.256 26.2053 137.256 26.312C137.256 26.76 137.245 27.0693 137.224 27.24C137.224 27.4107 137.256 27.6027 137.32 27.816C137.405 28.0293 137.469 28.1573 137.512 28.2C137.576 28.2427 137.736 28.296 137.992 28.36C138.248 28.4027 138.482 28.4133 138.696 28.392C138.909 28.3707 139.272 28.3493 139.784 28.328C139.912 28.328 140.008 28.3173 140.072 28.296C141.693 28.1893 142.76 28.0827 143.272 27.976C143.613 27.912 143.816 27.912 143.88 27.976C143.944 28.04 143.976 28.2427 143.976 28.584C143.976 29.032 143.848 29.3093 143.592 29.416C143.336 29.544 142.738 29.5973 141.8 29.576C140.904 29.576 139.72 29.64 138.248 29.768C136.733 29.896 135.944 29.8747 135.88 29.704C135.794 29.5547 135.816 28.6267 135.944 26.92C136.072 25.2133 136.189 24.2747 136.296 24.104Z"
                                fill="#29363D" />
                            <path
                                d="M104.624 11.88C104.773 11.5173 104.901 11.304 105.008 11.24C105.115 11.1547 105.285 11.1653 105.52 11.272C105.84 11.4427 106.917 11.432 108.752 11.24C110.736 11.048 111.824 11.0907 112.016 11.368C112.08 11.496 112.069 11.6667 111.984 11.88C111.941 12.008 111.835 12.104 111.664 12.168C111.515 12.2107 111.269 12.2427 110.928 12.264C110.608 12.2853 110.128 12.3067 109.488 12.328C107.867 12.3493 106.843 12.4133 106.416 12.52C106.053 12.584 105.829 12.712 105.744 12.904C105.68 13.0747 105.627 13.5653 105.584 14.376C105.541 15.1867 105.541 15.6773 105.584 15.848C105.648 16.0187 105.84 16.1467 106.16 16.232C106.523 16.3173 107.611 16.328 109.424 16.264C110.576 16.2213 111.323 16.2213 111.664 16.264C112.005 16.2853 112.229 16.392 112.336 16.584C112.528 16.968 112.347 17.224 111.792 17.352C111.301 17.48 110.224 17.5653 108.56 17.608C106.448 17.6933 105.2 17.6187 104.816 17.384C104.453 17.128 104.272 16.2747 104.272 14.824C104.272 13.48 104.389 12.4987 104.624 11.88ZM112.688 21.224C113.051 21.096 113.499 21.064 114.032 21.128C114.587 21.192 114.896 21.3093 114.96 21.48C115.067 21.736 115.056 21.9493 114.928 22.12C114.821 22.2693 114.576 22.376 114.192 22.44C113.829 22.504 113.317 22.536 112.656 22.536C111.397 22.536 110.672 22.6213 110.48 22.792C110.288 23.0053 110.171 24.2107 110.128 26.408C110.085 28.584 110.011 29.7467 109.904 29.896C109.797 30.0453 109.584 30.12 109.264 30.12C108.965 30.12 108.773 30.0453 108.688 29.896C108.645 29.832 108.645 29.3307 108.688 28.392C108.731 27.4533 108.805 26.4613 108.912 25.416C109.019 24.3707 109.104 23.688 109.168 23.368L109.328 22.792L107.12 22.984C105.2 23.1333 104.016 23.208 103.568 23.208C103.12 23.1867 102.864 23.0587 102.8 22.824C102.779 22.6533 102.853 22.5147 103.024 22.408C103.195 22.28 103.504 22.1627 103.952 22.056C104.4 21.9493 104.976 21.864 105.68 21.8C106.405 21.7147 107.312 21.64 108.4 21.576C111.131 21.4267 112.56 21.3093 112.688 21.224Z"
                                fill="#29363D" />

                            <path
                                d="M45.5678 10.28C47.2105 9.98134 48.2558 9.84268 48.7038 9.86401L49.3438 9.92801V12.936C49.3438 13.7253 49.3225 14.3547 49.2798 14.824C49.2585 15.2933 49.2051 15.6773 49.1198 15.976C49.0558 16.2747 48.9598 16.456 48.8318 16.52C48.7038 16.5627 48.5331 16.552 48.3198 16.488C48.1491 16.424 48.0425 16.2533 47.9998 15.976C47.9785 15.6773 47.9998 15.0053 48.0638 13.96C48.1278 12.8933 48.1385 12.2107 48.0958 11.912C48.0745 11.6133 47.9785 11.432 47.8078 11.368C47.4665 11.2613 46.5278 11.3573 44.9918 11.656C44.0105 11.8053 43.3491 11.8907 43.0078 11.912C42.6878 11.912 42.4745 11.8587 42.3678 11.752C42.1545 11.3893 42.1971 11.1333 42.4958 10.984C42.8585 10.8133 43.8825 10.5787 45.5678 10.28ZM50.9438 18.696C51.1358 18.504 51.3811 18.4933 51.6798 18.664C51.9785 18.8133 52.1491 19.0587 52.1918 19.4C52.1918 19.4213 52.1918 19.4427 52.1918 19.464C52.2345 19.848 52.0638 20.0827 51.6798 20.168C51.2958 20.2533 49.9198 20.392 47.5518 20.584C47.2318 20.6053 46.9865 20.616 46.8158 20.616C43.8505 20.8507 42.1011 20.968 41.5678 20.968C41.0558 20.9467 40.7998 20.7867 40.7998 20.488C40.7998 20.1893 41.0878 19.976 41.6638 19.848C42.2398 19.72 43.4985 19.592 45.4398 19.464C46.8051 19.3787 48.0318 19.2613 49.1198 19.112C50.2291 18.9413 50.8371 18.8027 50.9438 18.696ZM43.2958 24.104C43.4238 23.8907 43.6158 23.912 43.8718 24.168C44.1491 24.4667 44.2771 25.096 44.2558 26.056C44.2558 26.12 44.2558 26.2053 44.2558 26.312C44.2558 26.76 44.2451 27.0693 44.2238 27.24C44.2238 27.4107 44.2558 27.6027 44.3198 27.816C44.4051 28.0293 44.4691 28.1573 44.5118 28.2C44.5758 28.2427 44.7358 28.296 44.9918 28.36C45.2478 28.4027 45.4825 28.4133 45.6958 28.392C45.9091 28.3707 46.2718 28.3493 46.7838 28.328C46.9118 28.328 47.0078 28.3173 47.0718 28.296C48.6931 28.1893 49.7598 28.0827 50.2718 27.976C50.6131 27.912 50.8158 27.912 50.8798 27.976C50.9438 28.04 50.9758 28.2427 50.9758 28.584C50.9758 29.032 50.8478 29.3093 50.5918 29.416C50.3358 29.544 49.7385 29.5973 48.7998 29.576C47.9038 29.576 46.7198 29.64 45.2478 29.768C43.7331 29.896 42.9438 29.8747 42.8798 29.704C42.7945 29.5547 42.8158 28.6267 42.9438 26.92C43.0718 25.2133 43.1891 24.2747 43.2958 24.104Z"
                                fill="#29363D" />
                            <path
                                d="M11.6239 11.88C11.7733 11.5173 11.9013 11.304 12.0079 11.24C12.1146 11.1547 12.2853 11.1653 12.5199 11.272C12.8399 11.4427 13.9173 11.432 15.7519 11.24C17.7359 11.048 18.8239 11.0907 19.0159 11.368C19.0799 11.496 19.0693 11.6667 18.9839 11.88C18.9413 12.008 18.8346 12.104 18.6639 12.168C18.5146 12.2107 18.2693 12.2427 17.9279 12.264C17.6079 12.2853 17.1279 12.3067 16.4879 12.328C14.8666 12.3493 13.8426 12.4133 13.4159 12.52C13.0533 12.584 12.8293 12.712 12.7439 12.904C12.6799 13.0747 12.6266 13.5653 12.5839 14.376C12.5413 15.1867 12.5413 15.6773 12.5839 15.848C12.6479 16.0187 12.8399 16.1467 13.1599 16.232C13.5226 16.3173 14.6106 16.328 16.4239 16.264C17.5759 16.2213 18.3226 16.2213 18.6639 16.264C19.0053 16.2853 19.2293 16.392 19.3359 16.584C19.5279 16.968 19.3466 17.224 18.7919 17.352C18.3013 17.48 17.2239 17.5653 15.5599 17.608C13.4479 17.6933 12.1999 17.6187 11.8159 17.384C11.4533 17.128 11.2719 16.2747 11.2719 14.824C11.2719 13.48 11.3893 12.4987 11.6239 11.88ZM19.6879 21.224C20.0506 21.096 20.4986 21.064 21.0319 21.128C21.5866 21.192 21.8959 21.3093 21.9599 21.48C22.0666 21.736 22.0559 21.9493 21.9279 22.12C21.8213 22.2693 21.5759 22.376 21.1919 22.44C20.8293 22.504 20.3173 22.536 19.6559 22.536C18.3973 22.536 17.6719 22.6213 17.4799 22.792C17.2879 23.0053 17.1706 24.2107 17.1279 26.408C17.0853 28.584 17.0106 29.7467 16.9039 29.896C16.7973 30.0453 16.5839 30.12 16.2639 30.12C15.9653 30.12 15.7733 30.0453 15.6879 29.896C15.6453 29.832 15.6453 29.3307 15.6879 28.392C15.7306 27.4533 15.8053 26.4613 15.9119 25.416C16.0186 24.3707 16.1039 23.688 16.1679 23.368L16.3279 22.792L14.1199 22.984C12.1999 23.1333 11.0159 23.208 10.5679 23.208C10.1199 23.1867 9.86394 23.0587 9.79994 22.824C9.77861 22.6533 9.85328 22.5147 10.0239 22.408C10.1946 22.28 10.5039 22.1627 10.9519 22.056C11.3999 21.9493 11.9759 21.864 12.6799 21.8C13.4053 21.7147 14.3119 21.64 15.3999 21.576C18.1306 21.4267 19.5599 21.3093 19.6879 21.224Z"
                                fill="#29363D" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 35H32V3H0V4H31V34H0V35Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M62 4H32V34H62V4ZM31 3V35H63V3H31Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M93 4H63V34H93V4ZM62 3V35H94V3H62Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M124 4H94V34H124V4ZM93 3V35H125V3H93Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M156 3H124V35H156V34H125V4H156V3Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 41H-14V71H16V41ZM-15 40V72H17V40H-15Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M47 41H17V71H47V41ZM16 40V72H48V40H16Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M78 41H48V71H78V41ZM47 40V72H79V40H47Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M109 41H79V71H109V41ZM78 40V72H110V40H78Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M140 41H110V71H140V41ZM109 40V72H141V40H109Z"
                                fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M171 41H141V71H171V41ZM140 40V72H172V40H140Z"
                                fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M156 1H0V0H156V1ZM156 4H0V3H156V4Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M156 72H0V71H156V72ZM156 75H0V74H156V75Z" fill="#677880" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M156 35H0V34H156V35ZM156 38H0V37H156V38ZM156 41H0V40H156V41Z"
                                fill="#677880" />
                        </g>
                        <path
                            d="M73.6878 13.512C74.0078 13.448 74.2638 13.4267 74.4558 13.448C74.6478 13.448 74.9465 13.5227 75.3518 13.672C75.5652 13.736 75.7465 13.8107 75.8958 13.896C76.0452 13.9813 76.1945 14.088 76.3438 14.216C76.4932 14.344 76.6745 14.5253 76.8878 14.76C77.4212 15.3147 77.8158 15.7733 78.0718 16.136C78.2852 16.456 78.4772 16.6267 78.6478 16.648C78.8398 16.648 78.9785 16.4987 79.0638 16.2C79.2772 15.6027 79.6825 15.016 80.2798 14.44C80.8772 13.864 81.6132 13.5653 82.4878 13.544C83.3625 13.5013 83.9385 13.7573 84.2158 14.312C84.3438 14.568 84.4612 14.76 84.5678 14.888C84.6958 15.08 84.8772 15.656 85.1118 16.616C85.1758 17 85.1332 17.416 84.9838 17.864C84.8772 18.2053 84.6958 18.824 84.4398 19.72C83.8852 21.64 83.3198 22.9413 82.7438 23.624C82.5518 23.88 82.2852 24.2213 81.9438 24.648C81.7092 24.968 81.4425 25.224 81.1438 25.416C80.7812 25.6293 80.0985 26.1947 79.0958 27.112C78.5838 27.56 78.1145 27.688 77.6878 27.496C77.4745 27.4107 77.3678 27.3253 77.3678 27.24C77.3678 27.176 76.9838 26.7387 76.2158 25.928C75.4478 25.1173 74.9572 24.5413 74.7438 24.2C74.5092 23.816 74.1252 23.3147 73.5918 22.696C73.3358 22.376 73.1332 22.1307 72.9838 21.96C72.8558 21.7893 72.7278 21.608 72.5998 21.416C72.4718 21.224 72.3545 21.0427 72.2478 20.872C72.1625 20.7013 72.0452 20.456 71.8958 20.136C71.4265 19.2613 71.1385 18.344 71.0318 17.384C70.9892 16.872 71.0852 16.3387 71.3198 15.784C71.5545 15.2293 71.8852 14.7493 72.3118 14.344C72.7598 13.9173 73.2185 13.64 73.6878 13.512Z"
                            fill="#FF4F6E" className="svg-heart" />
                        <defs>
                            <clipPath id="clip0_73192_4246">
                                <rect width="156" height="75" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <strong className={styles.line}>회원가입</strong>
                </h2>

                <form className={styles["form-wrap"]} onSubmit={handleSubmit}>
                    <label className="label-style" htmlFor="user-email">이메일</label>
                    <input className="input-style" id="user-email" type="email" required onChange={handleData} value={email} />

                    <label className="label-style" htmlFor="user-pw">비밀번호</label>
                    <input className="input-style" id="user-pw" type="password" required onChange={handleData} value={password} autoComplete='currnet-password' />

                    <label className="label-style" htmlFor="user-nickname">닉네임</label>
                    <input className="input-style" id="user-nickname" type="text" required onChange={handleData} value={displayName} ></input>

                    <button className="black-btn" type="submit">회원가입</button>
                </form>
            </main>

            <footer>
                <p>Copyright 2023. WENIV All rights reserved.</p>
            </footer>
        </>
    )
}