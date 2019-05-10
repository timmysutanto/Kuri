# Kuri
**_(Ubah file README.md ini setelah program diselesaikan)_**
## Bagian 1
## Latar Belakang
[What is encryption](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/):
> Encryption transforms data into another format in such a way that only specific individual(s) can reverse the transformation. It uses a key, which is kept secret, in conjunction with the plaintext and the algorithm, in order to perform the encryption operation. As such, the ciphertext, algorithm, and key are all required to return to the plaintext.

[Why it matters](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/):
> The purpose of encryption is to transform data in order to keep it secret from others, e.g. sending someone a secret letter that only they should be able to read, or securely sending a password over the Internet. Rather than focusing on usability, the goal is to ensure the data cannot be consumed by anyone other than the intended recipient(s).

## Spesifikasi Tugas
1. Membuat _API_ yang dapat melakukan _encryption_ dan _decryption_ pada _text_
2. [Jenis cipher yang dapat diimplementasikan](#penilaian)
3. **TIDAK** harus semua cipher diimplementasikan
4. [Daftar teknologi yang boleh digunakan](https://research.hackerrank.com/developer-skills/2019#skills)
5. Tugas dikerjakan **individual**

## Langkah Pengerjaan
1. _Fork repository_ ini
2. Kerjakan tugas sesuai spesifikasi
3. Berikan penjelasan atas tugas yang telah dibuat (silakan _overwrite_ README ini)
4. Buat _pull request_

## Spesifikasi API
Buatlah API dengan ketentuan:

1. Sebuah _endpoint_ yang akan menerima _plaintext_, lalu mengubahnya menjadi _ciphertext_. Endpoint akan menerima **POST** _request_ dengan _payload_:
```JSON
{
  "plaintext": "Insert plaintext here"
}
```

2. Sebuah _endpoint_ yang akan menerima _ciphertext_, lalu mengubahnya menjadi _plaintext_. Endpoint akan menerima **POST** _request_ dengan _payload_:
```JSON
{
  "ciphertext": "Insert ciphertext here"
}
```

3. API harus dapat diakses melalui internet

## Penilaian
| Cipher | Nilai |
| --- | --- |
| Caesar Cipher | 100 |
| Vigenère Cipher | 200 |
| _Coming soon_ | _TBD_ |
| _Coming soon_ | _TBD_ |

## Bagian 2
Coming Soon