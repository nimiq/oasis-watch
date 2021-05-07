<header>
	<nav>
		<a href="/">OASIS.WATCH</a>

		<ul>
			<li><a href="https://nimiq.com/oasis">About OASIS</a></li>
		</ul>
	</nav>
</header>

{#if !id}
	<main>
		<section>
			<form action="/" method="get">
				<label for="id">Enter your HTLC ID:</label>
				<input type="text" size="34" name="id" id="id" required>
				<button type="submit">Search</button>
			</form>
		</section>
	</main>
{:else}
	<main>
		{#await htlcPromise}
			<section>
				<h2 style="color: gray;">Loading...</h2>
			</section>
		{:then htlc}
			<section>
				<header>
					<h1 class="htlc-id">
						<code>{htlc.id}</code>
					</h1>
					<big>
						<mark class="capitalize"><b>{htlc.status}</b></mark> HTLC
						for <mark><b>{htlc.asset.toUpperCase()}&nbsp;{htlc.amount.toFixed(2)}</b></mark>
						(+&nbsp;{htlc.asset.toUpperCase()}&nbsp;{htlc.fee.toFixed(2)} fee)
						{#if htlc.status !== 'settled'}
							<br>
							<small>
								expire{new Date(htlc.expires) > new Date() ? 's' : 'd'} <mark><b>{new Date(htlc.expires).toLocaleString()}</b></mark>
								{#if new Date(htlc.expires) > new Date()}
									(in {Math.floor((new Date(htlc.expires) - new Date()) / 1000 / 60)} min)
								{/if}
							</small>
						{/if}
					</big>
				</header>

				{#if htlc.status === 'pending'}
					{#each htlc.clearing.options as option}
						<aside>
							{#if !htlc.clearing.type || htlc.clearing.type !== option.type}
								<h3>{option.type.toUpperCase()} Clearing</h3>
							{:else}
								<h3>{option.type.toUpperCase()} Clearing <sup>{htlc.clearing.status.toUpperCase()}</sup></h3>
								{#if htlc.clearing.status === 'denied'}
									<p style="color: red;"><b>{htlc.clearing.detail.reason}</b></p>
								{/if}
								{#if htlc.clearing.status === 'partial'}
									<p>Already cleared: {htlc.asset.toUpperCase()} {htlc.clearing.detail.amount.toFixed(2)}</p>
								{/if}
							{/if}
							{#if option.type === 'sepa'}
								<table>
									<tbody>
										<tr>
											<th>Amount</th>
											<td>{htlc.asset.toUpperCase()} {(option.amount - (htlc.clearing.status === 'partial' ? htlc.clearing.detail.amount : 0)).toFixed(2)} {#if htlc.clearing.status === 'partial'}(remaining){/if}</td>
										</tr>
										<tr>
											<th>Name</th>
											<td>{option.recipient.name}</td>
										</tr>
										<tr>
											<th>IBAN</th>
											<td>{formatIntoGroups(option.recipient.iban)}</td>
										</tr>
										<tr>
											<th>BIC</th>
											<td>{option.recipient.bic}</td>
										</tr>
										<tr>
											<th>Purpose</th>
											<td>{option.purpose}</td>
										</tr>
									</tbody>
								</table>
							{:else if option.type === 'mock'}
								{option.description}
							{:else}
								<!-- Render any other clearing option by rendering the JSON object -->
								<pre>
									<code>{JSON.stringify(option, null, 2)}</code>
								</pre>
							{/if}
						</aside>
					{/each}
				{/if}

				{#if htlc.status === 'cleared'}
					{#each htlc.settlement.options as option}
						<aside>
							{#if !htlc.settlement.type || htlc.settlement.type !== option.type}
								<h3>{option.type.toUpperCase()} Settlement</h3>
							{:else}
								<h3>{option.type.toUpperCase()} Settlement <sup>{htlc.settlement.status.toUpperCase()}</sup></h3>
								{#if htlc.settlement.status === 'denied'}
									<p style="color: red;"><b>{htlc.settlement.detail.reason}</b></p>
								{/if}
							{/if}
							{#if option.type === 'sepa' || option.type === 'mock'}
								<code>POST</code> settlement instruction to <code>/htlc/{'{id}'}/settle</code>
							{:else}
								<!-- Render any other settlement option by rendering the JSON object -->
								<pre>
									<code>{JSON.stringify(option, null, 2)}</code>
								</pre>
							{/if}
						</aside>
					{/each}
				{/if}

				{#if htlc.status === 'settled'}
				<aside>
					<h3>
						{htlc.settlement.type.toUpperCase()} Settlement
						<sup class="{htlc.settlement.status}">{htlc.settlement.status.toUpperCase()}</sup>
					</h3>
					{#if htlc.settlement.status === 'denied'}
						<p style="color: red;"><b>{htlc.settlement.detail.reason}</b></p>
					{:else if htlc.settlement.detail}
						<pre>
							<code>{JSON.stringify(htlc.settlement.detail, null, 2)}</code>
						</pre>
					{/if}
					</aside>
				{/if}
			</section>

			<section>
				<table>
					<thead>
						<tr>
							<th>Key</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>ID</td>
							<td><b>{htlc.id}</b></td>
						</tr>
						<tr>
							<td>Beneficiary</td>
							<td>
								<small>Keytype:</small> <code>{htlc.beneficiary.kty}</code><br>
								<small>Curve:</small> <code>{htlc.beneficiary.crv}</code><br>
								<small>x:</small> <code>{base64ToHex(htlc.beneficiary.x)}</code><br>
								{#if htlc.beneficiary.y}
								<small>y:</small> <code>{base64ToHex(htlc.beneficiary.y)}</code>
								{/if}
							</td>
						</tr>
						<tr>
							<td>Hash</td>
							<td>
								<small>Algorithm:</small> <code>{htlc.hash.algorithm.toUpperCase()}</code><br>
								<code>{base64ToHex(htlc.hash.value)}</code>
							</td>
						</tr>
						<tr>
							<td>Preimage<br>(Secret)</td>
							<td>
								<small>Size:</small> <code>{htlc.preimage.size}</code><br>
								{#if htlc.preimage.value}
									<code>{base64ToHex(htlc.preimage.value)}</code>
								{:else}
									<code>N/A</code>
								{/if}
							</td>
						</tr>
					</tbody>
				</table>
			</section>
			<br>
			<section>
				<details>
					<summary>Plain HTLC Object</summary>
					<pre><code>{JSON.stringify(htlc, null, 2)}</code></pre>
					<a href="{`https://oasis.ten31.com/v1/htlc/${htlc.id}`}">Source ↗</a>
				</details>
			</section>
		{:catch error}
			<section>
				<h1 class="htlc-id">
					<code>{id}</code>
				</h1>
			</section>
			<section>
				<h2 style="color: crimson;">{error.message}</h2>
			</section>
		{/await}
	</main>
{/if}

<footer>
	<hr>
	<p><small>Generated {new Date().toISOString()}</small></p>
</footer>

<script>
	let htlcPromise = new Promise(_ => {})
	let id = new URLSearchParams(window.location.search).get('id')
	if (id) id = id.replace(/\s/g, '')

	if (id) {
		htlcPromise = fetch(`https://oasis.ten31.com/v1/htlc/${id}`)
			.then(async res => {
				const body = await res.json()
				if (!res.ok) throw new Error(`${body.status} - ${body.title}`)
				return body
			});
	}

	/**
	 * @param {string} str
	 * @returns {string}
	 */
	function base64ToHex(str) {
		const raw = atob(str.replace(/_/g, '/').replace(/-/g, '+'));
		let result = '';
		for (let i = 0; i < raw.length; i++) {
			const hex = raw.charCodeAt(i).toString(16);
			result += (hex.length === 2 ? hex : '0' + hex);
		}
		return result.toUpperCase();
	}

	/**
	 * @param {string} text
	 * @param {number} [groupSize]
	 * @param {string} [separator]
	 * @param {number} [firstGroupSize]
	 * @returns {string}
	 */
	function formatIntoGroups(text, groupSize = 4, separator = ' ', firstGroupSize) {
		let firstGroup = '';
		if (firstGroupSize) {
			firstGroup = text.substr(0, firstGroupSize);
			text = text.substr(firstGroupSize);
		}
		text = text.replace(new RegExp(`.{${groupSize}}`, 'g'), `$&${separator}`);
		if (firstGroup) {
			text = `${firstGroup}${separator}${text}`;
		}
		// Remove separator behind last group
		if (text.substring(text.length - separator.length) === separator) {
			text = text.substr(0, text.length - separator.length);
		}
		return text;
	}
</script>

<style>
	nav {
		margin-bottom: 0;
	}

	.htlc-id {
		margin-bottom: 3rem;
	}

	.capitalize {
		text-transform: capitalize;
	}

	section aside {
		width: auto;
		max-width: 100%;
	}

	section aside h3 {
		margin-top: 0
	}

	section > table {
		margin-top: 2rem;
	}

	th, td {
		text-align: left;
	}

	sup.accepted {
		background-color: green;
	}

	sup.confirmed {
		background-color: limegreen;
	}

	sup.failed {
		background-color: orangered;
	}

	pre code {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	button[type="submit"] {
		padding: 0.375rem 1rem;
	}
</style>
