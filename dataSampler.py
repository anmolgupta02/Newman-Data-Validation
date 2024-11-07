import pandas as pd

# Load the CSV file
data = pd.read_csv("C:/ANMOL/Fenergo Project/Data Migration/Test Execution/TR1_Batch1/Company.csv")

# Randomly select 10,000 rows
sample_data = data.sample(n=1000, random_state=1)  # random_state ensures reproducibility

# Save the sample to a new CSV file
sample_data.to_csv("sample_10000_records.csv", index=False)
