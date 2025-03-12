<script>
  import BookIcon from '$lib/assets/icons/book-icon.svelte'

  export let href
</script>
<li><a href={href}><BookIcon/><slot></slot></a></li>