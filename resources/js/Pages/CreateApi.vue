<template>
    <div id="app">
        <b-col>
            <b-row id="form">
                <form @submit.prevent="submit">
                    <label for="url">Url</label>
                    <input id="url" :model="form.url"/>
                    <table>
                        <tr>
                            <th>Title</th>
                            <th>Type</th>
                            <th>CSS Selector</th>
                        </tr>
                        <tr v-for="input in form.multiple_input" :key="input.id">
                            <td>
                                <input :id="`input-${input.id}`" type="text" v-model="input.title"/>
                            </td>
                            <td>
                                <select :id="`input-${input.id}`" v-model="input.type">
                                    <option value="text">Text</option>
                                    <option value="link">Link</option>
                                </select>
                            </td>
                            <td>
                                <textarea :id="`input-${input.id}`" type="text" v-model="input.value" rows="1" cols="50" />
                            </td>
                        </tr>
                    </table>
                    <button type="button" @click="add_input">add</button>
                </form>
            </b-row>
            <b-row id="result" class="col">
                {{ resApi }}
            </b-row>
        </b-col>
        <button type="submit" @click="postData">Create API</button>
    </div>

</template>

<script>
    export default {
        name: 'createApi',
        data() {
            return {
                form: {
                    url: String,
                    count_id: 0,
                    multiple_input: [{
                        id: 0,
                        title: "",
                        type: "",
                        value: "",
                    },],
                },
                resApi: {},
            }
        },
        computed: {
            async postData() {
                const response = await fetch('/api', {
                    // Default options are marked with *
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'same-origin', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    // redirect: 'follow', // manual, *follow, error
                    referrer: 'no-referrer', // no-referrer, *client
                    body: JSON.stringify(this.form.multiple_input) // body data type must match "Content-Type" header
                });
                return await response.json(); // parses JSON response into native JavaScript objects
            },
        },
        methods: {
            submit() {
                this.$inertia.post('/users', this.form)
            },
            add_input() {
                this.form.count_id++;
                this.form.multiple_input.push({
                    id: this.form.count_id,
                    title: "",
                    type: "",
                    value: "",
                })
            },
        },
    }
</script>
