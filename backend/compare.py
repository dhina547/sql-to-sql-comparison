def compare_data(df1, df2, mapping, primary_key):
    df1 = df1.rename(columns=mapping)
    df2 = df2[list(mapping.values())]

    merged = df1.merge(
        df2,
        on=primary_key,
        how="outer",
        indicator=True,
        suffixes=("_Q1", "_Q2")
    )

    return {
        "matches": merged[merged["_merge"] == "both"].to_dict("records"),
        "mismatches": merged[merged["_merge"] != "both"].to_dict("records"),
        "summary": {
            "query1_rows": len(df1),
            "query2_rows": len(df2),
            "matched": len(merged[merged["_merge"] == "both"]),
            "mismatched": len(merged[merged["_merge"] != "both"])
        }
    }
