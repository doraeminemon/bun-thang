<svelte:head>
	<title>Thuốc Lào Blog - Hòm công đức</title>
	<meta name="description" content="Hòm công đức" />
</svelte:head>
<script lang="ts">
	import CopyButton from '$components/copy-button.svelte';
</script>
<div class="content">
  <h1>Hòm công đức</h1>
  <p class="mb-4">Nếu thấy blog hay, bạn có thể thoải mái gửi tiền vào 1 trong 2 địa chỉ sau:</p>
  <div class="grid md:grid-cols-[7rem_24rem_2rem] grid-cols-1 gap-2">
    <p class="font-mono flex items-center">Techcombank: </p>
    <p class="font-mono flex items-center">DODINHTHYSON</p>
    <CopyButton content="DODINHTHYSON"/>
    <p class="font-mono flex items-center">Crypto: </p>
    <p class="font-mono flex items-center truncate">0xA24142bBFb0590511f26cE8f4658E70390dB8C0b</p>
    <CopyButton content="0xA24142bBFb0590511f26cE8f4658E70390dB8C0b"/>
  </div>
</div>