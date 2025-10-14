<script lang="ts">
	import CopyButton from '$components/copy-button.svelte';
</script>

<svelte:head>
	<title>Bún Thang Blog - Hòm công đức</title>
	<meta name="description" content="Hòm công đức" />
</svelte:head>
<div class="content">
	<h1>Hòm công đức</h1>
	<p class="mb-4">Nếu thấy blog hay, bạn có thể thoải mái gửi tiền vào 1 trong 2 địa chỉ sau:</p>
	<div class="grid grid-cols-1 gap-2 md:grid-cols-[7rem_24rem_2rem]">
		<p class="flex items-center font-mono">Techcombank:</p>
		<p class="flex items-center font-mono">DODINHTHYSON</p>
		<CopyButton content="DODINHTHYSON" />
		<p class="flex items-center font-mono">Crypto:</p>
		<p class="flex items-center truncate font-mono">0xA24142bBFb0590511f26cE8f4658E70390dB8C0b</p>
		<CopyButton content="0xA24142bBFb0590511f26cE8f4658E70390dB8C0b" />
	</div>
</div>
