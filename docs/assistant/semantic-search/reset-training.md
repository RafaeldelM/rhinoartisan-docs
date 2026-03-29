# Reset Training

The **Reset Training** command completely removes all Semantic Search training data.

Use this command only in exceptional situations, such as:

* Corrupted or inconsistent training data
* Unexpected Semantic Search behavior
* Major changes in design structure or workflows
* A full clean restart during troubleshooting

<figure><img src="../../.gitbook/assets/image (818).png" alt=""><figcaption></figcaption></figure>

### What this command does:

* Deletes all locally generated indexing data
* Deletes all AI training files

After running **Reset Training**, Semantic Search will have no trained data available.

:::danger
This action cannot be undone and requires retraining all data.
:::

### To use Semantic Search again, you must:

1. Run **Create Training** to re-index the designs
2. Run **Run Training** to train the AI again

