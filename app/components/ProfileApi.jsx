const END_POINT = 'http://localhost:3000/profiles';

export function getProfiles() {
    return fetch(END_POINT)
        .then(res => res.json())
        .catch(err => console.log(err))

}
