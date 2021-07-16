<template>
    <div class="form-wrapper clearfix">
        <transition name="form">
            <form v-if="!sent" @submit.prevent="onSubmit" class="form">
                <div class="input-field">
                    <input v-model="name" id="name" name="name" type="text" autocomplete="name" class="validate" required>
                    <label class="active" data-error="You got a name?" for="name">Name</label>
                </div>

                <div class="input-field">
                    <input v-model="email" id="email" name="email" type="email" class="validate" autocomplete="email" required>
                    <label for="email" data-error="Invalid email">Email</label>
                </div>
                <div class="input-field">
                    <input v-model="subject" id="subject" type="text">
                    <label for="subject">Subject</label>
                </div>

                <div class="input-field">
                    <textarea v-model="comment" maxlength="500" id="comment" class="materialize-textarea validate" required></textarea>
                    <label for="comment" data-error="What do you have to say?">Comment</label>
                </div>
                <button type="submit" class="waves-effect waves-dark btn">Sign</button>
            </form>
            <div v-else class="flow-text flex-center">
                <persistent-dialogue :script="script" :setScrollfire="false">
                </persistent-dialogue>
            </div>
        </transition>
    </div>
</template>

<script>

import persistentDialogue from '@/components/Dialogue/DialoguePersistent'
import {POST_COMMENT} from '@/store'

export default {
    name:'GuestbookForm',
    data(){
        return {
            name:'',
            email:'',
            subject:'',
            comment:'',
            sent: false,
            script:[
                {speaker:'robot', lines:["Thanks for signing. I'll make sure the sire sees this."]},
            ],
        }
    },
    methods:{
        onSubmit(e){
            this.$store.dispatch({
                type: POST_COMMENT,
                data:{
                    name: this.name,
                    email: this.email,
                    subject: this.subject,
                    comment: this.comment
                }
            })
            .then(()=>{
                this.sent = true;
            })
            .catch((e)=>{
                console.error(e)
            })
        }
    },
    components:{
        persistentDialogue
    }
}

</script>

<style lang="scss" scoped>



.form-wrapper{
    margin: 3em 0em;
    padding: .5em 1em;
    background: rgba(0,0,0,0.1);
}

.form{
    max-height:800px;
    overflow: hidden;
}

button[type="submit"]{
    float: right;
    background: #FAD097;
    color: #333;
}

label{
    color: #333;
}

.input-field{
    margin-top: 1.5em;
}

/* label color */
.input-field label {
    color: #333;
}
/* label focus color */
.input-field input:focus + label,
.input-field textarea.materialize-textarea:focus + label  {
    color: #333;
}
/* label underline focus color */
.input-field input:focus,
textarea.materialize-textarea:focus{
    border-bottom: 1px solid #333;
    box-shadow: 0 1px 0 0 #333;
}

.form-enter-active, .form-leave-active{
    transition: 1.5s;
}

.form-leave-to{
    opacity: 0;
    max-height: 0;
}

.form-enter{
    opacity: 0;
}

</style>
