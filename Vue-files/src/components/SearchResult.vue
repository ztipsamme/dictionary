<script>
  export default {
    computed: {
      dictionary: {
        get() {
          return this.$store.state.dictionary
        },
      },
    },
    props: {
      word: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/main.scss';
  .error {
    color: $danger-color;
  }
</style>

<template>
  <div class="card p-3">
    <div class="error" v-if="dictionary.word === ''">
      The word "{{ word }}" could not be found in the dictionary. Pleas check
      your spellning or try another word.
    </div>
    <dl v-for="vocable in dictionary.results" :key="vocable.definition">
      <dt>{{ vocable.partOfSpeech }}:</dt>
      <dd>{{ vocable.definition }}</dd>
      <div>
        <div v-if="vocable.synonyms !== ''">synonym:</div>
        <dd v-for="(synonym, index) in vocable.synonyms" :key="index">
          <ul>
            <li>{{ synonym }}</li>
          </ul>
        </dd>
      </div>
    </dl>
  </div>
</template>
