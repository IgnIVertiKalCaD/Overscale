<template>
        <v-dialog
            v-model="dialog"
            persistent
            width="1024"
        >
            <template v-slot:activator="{ props }">
                <v-btn
                    color="primary"
                    v-bind="props"
                >
                    Auth
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="avatar-corrector-size">
                    <v-img :src="avatar"/>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                    label="Login"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                            >
                                <v-text-field
                                    label="Email"
                                    hint="xxxx@gmail.com"
                                    persistent-hint
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12"
                            sm="6">
                                <v-text-field
                                    label="Password*"
                                    type="password"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="dialog = false"
                    >
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
</template>

<script>
import avatar from "@/assets/account-image.png"
export default {
    name: "registration",
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
        dialog: true,
        avatar
    }),
}
</script>

<style scoped lang="scss">
.avatar-corrector-size {
    height: 150px;
}

</style>